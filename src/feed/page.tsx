"use client";

import { useState } from "react";

export default function FeedPage() {
  const [post, setPost] = useState("");
  const [status, setStatus] = useState("Feed system ready.");
  const [posts, setPosts] = useState([
    {
      name: "Amosclaud AI",
      handle: "@amosai",
      text: "Welcome to the new Amosclaud feed. AI tools, creators, marketplace, and business updates live here.",
      tag: "AI Update",
    },
    {
      name: "Creator Hub",
      handle: "@creator",
      text: "Creators can post updates, promote products, share services, and connect with followers.",
      tag: "Creator",
    },
    {
      name: "Marketplace",
      handle: "@market",
      text: "Marketplace products and business services will appear in the feed with secure actions.",
      tag: "Business",
    },
  ]);

  function publishPost() {
    const unsafe = ["<", ">", "script", "DROP", "DELETE", "SELECT", "INSERT", "UPDATE", "--", "http://"];
    const found = unsafe.find((x) => post.toLowerCase().includes(x.toLowerCase()));

    if (!post.trim()) {
      setStatus("Blocked: empty post is not allowed.");
      return;
    }

    if (found) {
      setStatus(`Blocked: unsafe content detected → ${found}`);
      return;
    }

    setPosts([
      {
        name: "You",
        handle: "@amosclaud",
        text: post,
        tag: "New Post",
      },
      ...posts,
    ]);

    setPost("");
    setStatus("Post added to Amosclaud feed.");
  }

  return (
    <main style={page}>
      <header style={header}>
        <a href="/" style={nav}>← Home</a>
        <h1 style={logo}>AMOS<span style={pink}>FEED</span></h1>
        <a href="/profile" style={nav}>Profile</a
