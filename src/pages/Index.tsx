import YouTubeHeader from "@/components/YouTubeHeader";
import VideoPlayer from "@/components/VideoPlayer";
import CTAButton from "@/components/CTAButton";
import VideoInfo from "@/components/VideoInfo";
import VideoDescription from "@/components/VideoDescription";
import CommentsSection from "@/components/CommentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <YouTubeHeader />
      <VideoPlayer />
      <CTAButton />
      <VideoInfo />
      <VideoDescription />
      <CommentsSection />
    </div>
  );
};

export default Index;
