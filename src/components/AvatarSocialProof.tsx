
import React from "react";

export function AvatarSocialProof() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1.5 shadow shadow-black/5 w-fit mx-auto">
      <div className="flex -space-x-2">
        <img
          className="rounded-full ring-1 ring-background w-7 h-7"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format"
          width={28}
          height={28}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background w-7 h-7"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format"
          width={28}
          height={28}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background w-7 h-7"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format"
          width={28}
          height={28}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background w-7 h-7"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format"
          width={28}
          height={28}
          alt="Avatar 04"
        />
      </div>
      <p className="px-3 text-sm text-muted-foreground whitespace-nowrap">
        Trusted by <strong className="font-medium text-foreground">60K+</strong> developers.
      </p>
    </div>
  );
}
