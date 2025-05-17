'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

export default function AboutUs() {
  return (
    <main className="max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold pb-4">私達について</h1>
        <p>
          本サイトは友人と<a href="https://mtg-jp.com/gameplay/format/commander.html">統率者戦</a>でランダムに統率者をピックして遊ぶために作られました。
          統率者を選ぶのではなく、機械にランダムにピックしてもらうことで新しい発見や見たことのないシナジーといった体験を提供することを目的としています。
        </p>
        <p>
          是非色々な目的にご活用ください！
        </p>

        <h2 className="text-xl font-bold pt-10 pb-4">
          データの取得先
        </h2>
        <p>
          データは Scryfall から取得しています。
        </p>
      </div>
    </main>
  );
}
