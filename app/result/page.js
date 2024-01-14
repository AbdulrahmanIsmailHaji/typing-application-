"use client";

import Scores from "@/Components/Scores";
import { useSession } from "next-auth/react";
import Link from "next/link";

const OverallScore = ({ score15, score30, score60 }) => {
  const { data: session } = useSession();

  return (
    <div className="overallscore">
      {!session?.user && (
        <p className="link">
          <Link href="/login" className="sign-link">
            Sign in{" "}
          </Link>
          to save your highest score and keep track of your achievements!
        </p>
      )}
      <Scores score15={score15} score30={score30} score60={score60} />
    </div>
  );
};

export default OverallScore;
