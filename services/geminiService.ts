
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are VERD, the AI concierge for VERDLeads. 
Your goal is to help visitors understand how VERDLeads uses AI to generate B2B leads for tech, SaaS, and professional service firms.
Keep responses concise, professional, and helpful. 
Try to guide the user towards booking a consultation if they seem like a qualified B2B lead.
Mention specific tools we use like Clay, Apollo, and SmartLead if relevant.`;

export class GeminiService {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-latest',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: prompt }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having a little trouble connecting to my brain right now. Please try again or reach out to our team directly!";
    }
  }
}

export const gemini = new GeminiService();
