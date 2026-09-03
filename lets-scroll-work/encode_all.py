import subprocess
import os

clips = [
    ("lets-scroll-work/dive_terminal.mp4", "public/assets/vid/terminal.mp4"),
    ("lets-scroll-work/conn1.mp4",         "public/assets/vid/conn1.mp4"),
    ("lets-scroll-work/dive_cabin.mp4",    "public/assets/vid/cabin.mp4"),
    ("lets-scroll-work/conn_2.mp4",        "public/assets/vid/conn2.mp4"),
    ("lets-scroll-work/dive_highway.mp4",  "public/assets/vid/highway.mp4"),
    ("lets-scroll-work/dive_arrival.mp4",  "public/assets/vid/arrival.mp4"),
]

for src, dst in clips:
    print(f"Encoding {src} -> {dst}...")
    cmd = [
        "ffmpeg", "-v", "warning", "-y", "-i", src,
        "-an",
        "-vf", "unsharp=5:5:0.8:5:5:0.0",
        "-c:v", "libx264", "-preset", "fast", "-crf", "20", "-pix_fmt", "yuv420p",
        "-g", "8", "-keyint_min", "8", "-sc_threshold", "0",
        "-movflags", "+faststart",
        dst
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error encoding {src}: {res.stderr}")
    else:
        sz_mb = os.path.getsize(dst) / (1024 * 1024)
        print(f"Done: {dst} ({sz_mb:.2f} MB)")
print("All video encodes complete!")
