"use client";

import dynamic from "next/dynamic";

const DynamicEmotionSoundDemo = dynamic(
  () => import("@/src/modules/emotion-sound-platform/demo"),
  {
    ssr: false,
    loading: () => <div className="p-4">加载中...</div>,
  },
);

export default function EmotionSoundPlatformPage() {
  return (
    <div>
      <DynamicEmotionSoundDemo />
    </div>
  );
}
