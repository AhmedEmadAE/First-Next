import React from "react";
import Link from "next/link";

export default function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <ul style={{ fontSize: "30px", color: "blue" }}>
                <li>
                    <Link href="/Gallery/web">Web Gallery</Link>
                </li>
                <li>
                    <Link href="/Gallery/mobile">Mobile Gallery</Link>
                </li>
            </ul>
        </div>
    );
}