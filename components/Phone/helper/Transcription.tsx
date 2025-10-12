import useCombinedTranscriptions from "@/hooks/useCombinedTranscriptions";
import React from "react";

const Transcription = () => {
  const combinedTranscriptions = useCombinedTranscriptions();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // scroll to bottom when new transcription is added
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [combinedTranscriptions]);

  return (
    <>
      <div>
        {/* Fade-out gradient mask */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        {/* Scrollable content */}
        <div
          ref={containerRef}
          className="h-full flex flex-col gap-2 overflow-y-auto px-6 py-8"
        >
          {combinedTranscriptions.map((segment) => (
            <div
              id={segment.id}
              key={segment.id}
              className={
                segment.role === "assistant"
                  ? "p-3 self-start w-fit text-left bg-gray-100 rounded-lg max-w-[80%]"
                  : "bg-blue-600 text-white rounded-lg p-3 self-end w-fit text-left max-w-[80%]"
              }
            >
              {segment.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transcription;
