import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Parse and validate request body
    const body: any = await req.json();
    const { email }: { email?: string } = body;

    // Enhanced email validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" }, 
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" }, 
        { status: 400 }
      );
    }

    // Make request to Substack API (corrected endpoint)
    const response: Response = await fetch("https://sujitgouda.substack.com/api/v1/free?nojs=true", {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (compatible; Newsletter-Signup)"
      },
      body: new URLSearchParams({
        email: email.trim().toLowerCase()
      }).toString(),
    });

    // Handle different response scenarios
    const responseText: string = await response.text();
    
    if (response.ok) {
      // Check if response indicates success
      if (responseText.includes('success') || responseText.includes('subscribed') || response.status === 200) {
        return NextResponse.json({ 
          success: true, 
          message: "Successfully subscribed to the newsletter!" 
        });
      }
    }

    // Log response for debugging
    console.log('Substack response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText.substring(0, 200) + '...'
    });

    // Handle specific error status codes
    if (response.status === 400) {
      return NextResponse.json(
        { error: "Invalid email or already subscribed" }, 
        { status: 400 }
      );
    }

    if (response.status === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." }, 
        { status: 429 }
      );
    }

    // Try to parse as JSON if possible, otherwise use text response
    let errorMessage: string = "Failed to subscribe to newsletter";
    try {
      const errorData: any = JSON.parse(responseText);
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      // If HTML response, extract meaningful error
      if (responseText.includes('<!DOCTYPE') || responseText.includes('<html>')) {
        errorMessage = "Service temporarily unavailable. Please try again later.";
      } else {
        errorMessage = response.statusText || errorMessage;
      }
    }

    return NextResponse.json(
      { error: errorMessage }, 
      { status: response.status }
    );

  } catch (err: any) {
    console.error("Newsletter subscription error:", err);
    
    // Handle JSON parsing errors
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request format" }, 
        { status: 400 }
      );
    }

    // Handle network/fetch errors
    if (err.name === "TypeError" && err.message.includes("fetch")) {
      return NextResponse.json(
        { error: "Network error. Please try again." }, 
        { status: 503 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." }, 
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: "Method not allowed" }, 
    { status: 405 }
  );
}