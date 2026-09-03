import cv2
import os

names = ['terminal', 'cabin', 'highway', 'arrival']
base = 'lets-scroll-work'

print(f"{'File':<20} {'Resolution':<15} {'FPS':<8} {'Frames':<8} {'Duration':<10}")
print('-' * 65)

for n in names:
    vpath = os.path.join(base, f"dive_{n}.mp4")
    if not os.path.exists(vpath):
        print(f"{vpath}: NOT FOUND")
        continue
    cap = cv2.VideoCapture(vpath)
    if not cap.isOpened():
        print(f"{vpath}: FAILED TO OPEN")
        continue
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    dur = total_frames / fps if fps > 0 else 0
    fname = f"dive_{n}.mp4"
    res = f"{w}x{h}"
    print(f"{fname:<20} {res:<15} {fps:<8.2f} {total_frames:<8} {dur:<10.2f}s")

    # Extract first frame
    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    ret0, frame0 = cap.read()
    if ret0:
        first_path = os.path.join(base, f"first_{n}.png")
        cv2.imwrite(first_path, frame0)
    
    # Extract last frame (or near-last frame, e.g. -2 frames from end)
    last_idx = max(0, total_frames - 2)
    cap.set(cv2.CAP_PROP_POS_FRAMES, last_idx)
    ret_last, frame_last = cap.read()
    if ret_last:
        last_path = os.path.join(base, f"last_{n}.png")
        cv2.imwrite(last_path, frame_last)
        
    cap.release()
print('\nExtracted boundary frames successfully.')
