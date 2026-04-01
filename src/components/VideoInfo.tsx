import { ThumbsUp, ThumbsDown, Share, Bookmark } from "lucide-react";

const VideoInfo = () => {
  return (
    <div className="px-4 py-3">
      <h1 className="text-foreground text-base font-semibold leading-snug mb-3">
        Ative o modo reprodutivo da sua planta e em menos de 3 semanas veja
        frutos incríveis!
      </h1>

      {/* Actions - Desktop */}
      <div className="hidden md:flex items-center gap-3 mb-4">
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <ThumbsDown className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <ThumbsUp className="w-5 h-5" />
          <span className="text-sm">1.783</span>
        </button>
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Share className="w-5 h-5" />
          <span className="text-sm">To share</span>
        </button>
        <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="w-5 h-5" />
          <span className="text-sm">Save</span>
        </button>
      </div>

      {/* Channel info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://media.atomicatpages.net/u/p4N19AiZlnhPlDEbsYMdAfxKjQk2/Pictures/share/pageHQGYeTB/ktxCFQ6757173.png?quality=73#147365"
          alt="Amanda NPK Natural"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-foreground text-sm font-medium">
            Amanda NPK Natural
          </p>
          <p className="text-muted-foreground text-xs">1.1M</p>
        </div>
        <button className="bg-foreground text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
          Subscribe
        </button>
      </div>

      {/* Actions - Mobile */}
      <div className="flex md:hidden items-center gap-3 mb-4">
        <button className="flex items-center gap-1 text-muted-foreground">
          <ThumbsDown className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1 text-muted-foreground">
          <ThumbsUp className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1 text-muted-foreground">
          <Share className="w-5 h-5" />
          <span className="text-xs">To share</span>
        </button>
        <button className="flex items-center gap-1 text-muted-foreground">
          <Bookmark className="w-5 h-5" />
          <span className="text-xs">Save</span>
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
