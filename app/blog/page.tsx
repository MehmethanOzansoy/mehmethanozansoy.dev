import { title } from "process";
import React from "react";
import { defineCollection, defineConfig, s } from "velite";

export default function Blog() {
  return (
    <main className="z-10 mx-auto max-w-3xl flex flex-col w-full px-4  py-10">
      <h1 className="my-4 text-2xl font-semibold uppercase">Blogs</h1>
      {/* Blog yazıları burada listelenecek */}
    </main>
  );
}
