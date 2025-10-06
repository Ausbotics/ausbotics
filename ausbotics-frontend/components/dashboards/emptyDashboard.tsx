"use client";

import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="bg-muted rounded-full p-6">
        <PlusCircle className="h-12 w-12 text-muted-foreground" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">No workflows yet</h2>
        <p className="text-muted-foreground mt-2">
          Contact us for creating your first workflow. It will appear here once
          added.
        </p>
      </div>
    </div>
  );
}
