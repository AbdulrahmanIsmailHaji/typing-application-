"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Scores = ({ score15, score30, score60 }) => {
  const [scores, setScores] = useState(null);
  const session = useSession();
  const { status, data: userData } = session;

  useEffect(() => {
    const fetchScore = async () => {
      try {
        if (status === "authenticated" && userData && userData?.user) {
          const loggedInUserEmail = userData.user.email;

          const res = await fetch(`${process.env.VERCEL_URL}/api/user`, {
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error("Failed to fetch scores");
          }

          const data = await res.json();

          if (!data || !data?.user || data?.user?.length === 0) {
            throw new Error("Empty or invalid response data");
          }

          const matchingUser = data?.user?.find(
            (user) => user?.email === loggedInUserEmail
          );

          if (matchingUser) {
            setScores({
              score15: matchingUser?.score15,
              score30: matchingUser?.score30,
              score60: matchingUser?.score60,
            });
          } else {
            console.log("User not found in the response");
          }
        }
      } catch (error) {
        console.log("ScoreError", error);
      }
    };

    fetchScore();
  }, [status, userData]);

  if (!scores) {
    return (
      <div className="score">
        <p>This is the HighScore record:</p>
        <p>
          Words per 60 seconds:{" "}
          <span className="bep-score">{score60 ? score60.toFixed(2) : 0}</span>
          <br />
          Words per 30 seconds:{" "}
          <span className="bep-score">{score30 ? score30.toFixed(2) : 0}</span>
          <br />
          Words per 15 seconds:{" "}
          <span className="bep-score">{score15 ? score15.toFixed(2) : 0}</span>
        </p>
      </div>
    );
  }

  const {
    score15: userScore15,
    score30: userScore30,
    score60: userScore60,
  } = scores;

  return (
    <div className="score">
      <p>This is the score record:</p>
      <p>
        Words per 60 seconds:{" "}
        <span className="bep-score">{userScore60.toFixed(2)}</span>
        <br />
        Words per 30 seconds:{" "}
        <span className="bep-score">{userScore30.toFixed(2)}</span>
        <br />
        Words per 15 seconds:{" "}
        <span className="bep-score">{userScore15.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default Scores;
