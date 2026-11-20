'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FloorRoomEntry {
  name: string;
  description: string;
  fileName: string | null;
}

interface SpecificRoomEntry {
  roomType: string;
  description: string;
  fileName: string | null;
}

interface FloorEntry {
  rooms: FloorRoomEntry[];
}

function createFloorRoom(): FloorRoomEntry {
  return { name: '', description: '', fileName: null };
}

function createSpecificRoom(): SpecificRoomEntry {
  return { roomType: 'Gudang', description: '', fileName: null };
}

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

function resizeArray<T>(arr: T[], targetLength: number, factory: () => T): T[] {
  if (arr.length === targetLength) return arr;
  if (arr.length > targetLength) return arr.slice(0, targetLength);
  return [...arr, ...Array.from({ length: targetLength - arr.length }, factory)];
}

export default function AturJadwalRumahForm() {
  const container = useRef<HTMLDivElement>(null);
  const [scope, setScope] = useState<'seluruh' | 'ruangan'>('seluruh');
  const [floors, setFloors] = useState<FloorEntry[]>([{ rooms: [createFloorRoom()] }]);
  const [specificRooms, setSpecificRooms] = useState<SpecificRoomEntry[]>([createSpecificRoom()]);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-form-card', {
          y: 16,
          opacity: 0,
          duration: 0.45,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    },
    { scope: container }
  );

  const setFloorCount = (next: number) => {
    const clamped = Math.max(1, Math.min(10, next || 1));
    setFloors((prev) => resizeArray(prev, clamped, () => ({ rooms: [createFloorRoom()] })));
  };

  const setFloorRoomCount = (floorIdx: number, next: number) => {
    const clamped = Math.max(1, Math.min(20, next || 1));
    setFloors((prev) =>
      prev.map((floor, idx) =>
        idx === floorIdx
          ? { ...floor, rooms: resizeArray(floor.rooms, clamped, createFloorRoom) }
          : floor
      )
    );
  };

  const updateFloorRoom = (
    floorIdx: number,
    roomIdx: number,
    patch: Partial<FloorRoomEntry>
  ) => {
    setFloors((prev) =>
      prev.map((floor, fIdx) =>
        fIdx === floorIdx
          ? {
              ...floor,
              rooms: floor.rooms.map((room, rIdx) =>
                rIdx === roomIdx ? { ...room, ...patch } : room
              ),
            }
          : floor
      )
    );
  };

  const setSpecificRoomCount = (next: number) => {
    const clamped = Math.max(1, Math.min(20, next || 1));
    setSpecificRooms((prev) => resizeArray(prev, clamped, createSpecificRoom));
  };

  const updateSpecificRoom = (roomIdx: number, patch: Partial<SpecificRoomEntry>) => {
    setSpecificRooms((prev) =>
      prev.map((room, idx) => (idx === roomIdx ? { ...room, ...patch } : room))
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (scope === 'seluruh') {
      const totalFloors = floors.length;
      const totalRooms = floors.reduce((sum, floor) => sum + floor.rooms.length, 0);
      setSubmittedSummary(
        `Permintaan pembersihan seluruh rumah (${totalFloors} lantai, ${totalRooms} ruangan) telah kami terima. Tim operasional TJBC akan segera mengonfirmasi jadwal melalui WhatsApp.`
      );
    } else {
      setSubmittedSummary(
        `Permintaan pembersihan untuk ${specificRooms.length} ruangan tertentu telah kami terima. Tim operasional TJBC akan segera mengonfirmasi jadwal melalui WhatsApp.`
      );
    }
  };

  return (
    <div ref={container} className="min-h-screen flex flex-col">
      {/* CONTEXTUAL TOP BAR */}
      <header className="sticky top-0 z-40 w-full bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:text-light-primary dark:hover:text-dark-accent-blue transition-colors duration-state-change"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                d="M13 8H3M7 4L3 8l4 4"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
            <span>Kembali ke Layanan</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-baseline gap-0.5 font-display text-title-md tracking-tight text-light-on-surface dark:text-dark-on-surface"
            aria-label="Beranda TJBC"
          >
            <span>TJBC</span>
            <span className="text-light-primary dark:text-dark-accent-blue">.</span>
          </Link>
        </div>
      </header>

      {/* MAIN FORM CONTENT */}
      <main className="flex-1 py-6 sm:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="anim-form-card rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card p-5 sm:p-8 flex flex-col gap-6">
            {/* Form Header */}
            <div className="flex items-start gap-3.5 pb-5 border-b border-light-border dark:border-dark-border">
              <div className="w-10 h-10 shrink-0 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary flex items-center justify-center text-light-primary dark:text-dark-accent-blue">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5L10 3.5l7 6V17a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1V9.5Z"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                  GENERAL CLEANING — RESIDENSIAL
                </span>
                <h1 className="font-headline text-title-md text-light-on-surface dark:text-dark-on-surface">
                  Atur Jadwal Pembersihan Rumah
                </h1>
                <p className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted text-pretty">
                  Pilih cakupan pembersihan rumah Anda dan lengkapi detail lantai serta ruangan.
                </p>
              </div>
            </div>

            {!submittedSummary ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Jenis Pembersihan (Dropdown) */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cleaning-scope"
                    className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                  >
                    Jenis Pembersihan
                  </label>
                  <select
                    id="cleaning-scope"
                    value={scope}
                    onChange={(e) => setScope(e.target.value as 'seluruh' | 'ruangan')}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                  >
                    <option value="seluruh">Seluruh Rumah</option>
                    <option value="ruangan">Ruangan Tertentu</option>
                  </select>
                </div>

                {scope === 'seluruh' ? (
                  /* SECTION A: SELURUH RUMAH */
                  <div className="flex flex-col gap-5">
                    <div className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-0.5">
                        <label
                          htmlFor="home-floor-count"
                          className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                        >
                          Jumlah Lantai
                        </label>
                        <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                          Lantai rumah yang dibersihkan.
                        </span>
                      </div>
                      <div className="flex items-center border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card shrink-0">
                        <button
                          type="button"
                          onClick={() => setFloorCount(floors.length - 1)}
                          aria-label="Kurangi jumlah lantai"
                          className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-r border-light-border dark:border-dark-border cursor-pointer"
                        >
                          -
                        </button>
                        <input
                          id="home-floor-count"
                          type="number"
                          min={1}
                          max={10}
                          value={floors.length}
                          onChange={(e) => setFloorCount(parseInt(e.target.value, 10))}
                          className="w-12 h-9 text-center border-0 bg-transparent font-mono text-body-md tabular-nums text-light-on-surface dark:text-dark-on-surface focus:outline-none p-0"
                        />
                        <button
                          type="button"
                          onClick={() => setFloorCount(floors.length + 1)}
                          aria-label="Tambah jumlah lantai"
                          className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-l border-light-border dark:border-dark-border cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      {floors.map((floor, floorIdx) => (
                        <div
                          key={floorIdx}
                          className="p-4 sm:p-5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col gap-4"
                        >
                          <div className="flex items-center justify-between gap-3 pb-3 border-b border-light-border dark:border-dark-border">
                            <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                              LANTAI {pad2(floorIdx + 1)}
                            </span>
                            <div className="flex items-center gap-2">
                              <label
                                htmlFor={`home-floor-${floorIdx}-rooms`}
                                className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                              >
                                Jumlah Ruangan
                              </label>
                              <input
                                id={`home-floor-${floorIdx}-rooms`}
                                type="number"
                                min={1}
                                max={20}
                                value={floor.rooms.length}
                                onChange={(e) =>
                                  setFloorRoomCount(floorIdx, parseInt(e.target.value, 10))
                                }
                                className="w-16 px-2.5 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card text-center font-mono text-body-md tabular-nums text-light-on-surface dark:text-dark-on-surface focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            {floor.rooms.map((room, roomIdx) => (
                              <div
                                key={roomIdx}
                                className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card flex flex-col gap-3.5"
                              >
                                <span className="font-mono text-mono-sm uppercase text-light-on-surface-muted dark:text-dark-on-surface-muted">
                                  RUANGAN {pad2(roomIdx + 1)} — LANTAI {pad2(floorIdx + 1)}
                                </span>
                                <div className="flex flex-col gap-1.5">
                                  <label className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                                    Nama Ruangan
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={room.name}
                                    onChange={(e) =>
                                      updateFloorRoom(floorIdx, roomIdx, { name: e.target.value })
                                    }
                                    placeholder="Contoh: Ruang Keluarga"
                                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                                  />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  <label className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                                    Deskripsi Ruangan
                                  </label>
                                  <textarea
                                    rows={2}
                                    required
                                    value={room.description}
                                    onChange={(e) =>
                                      updateFloorRoom(floorIdx, roomIdx, {
                                        description: e.target.value,
                                      })
                                    }
                                    placeholder="Contoh: Lantai keramik, sofa kain 3 dudukan, area jendela besar"
                                    className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                                  />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                                    Gambar Ruangan
                                  </span>
                                  <label className="cursor-pointer rounded-sm border border-dashed border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-4 flex items-center justify-between gap-3 transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary">
                                    <div className="flex items-center gap-3 min-w-0">
                                      <svg
                                        className="w-6 h-6 shrink-0 text-light-on-surface-muted dark:text-dark-on-surface-muted"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        aria-hidden="true"
                                      >
                                        <rect
                                          x="3"
                                          y="4"
                                          width="18"
                                          height="16"
                                          strokeLinecap="square"
                                          strokeLinejoin="miter"
                                        />
                                        <circle cx="8.5" cy="9.5" r="1.5" />
                                        <path
                                          d="M21 16l-5-5-6 6-3-3-4 4"
                                          strokeLinecap="square"
                                          strokeLinejoin="miter"
                                        />
                                      </svg>
                                      <span
                                        className={`font-body text-body-md truncate ${
                                          room.fileName
                                            ? 'text-light-on-surface dark:text-dark-on-surface'
                                            : 'text-light-on-surface-muted dark:text-dark-on-surface-muted'
                                        }`}
                                      >
                                        {room.fileName || 'Unggah foto ruangan (JPG, PNG)'}
                                      </span>
                                    </div>
                                    <span className="shrink-0 px-3 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                                      Pilih Foto
                                    </span>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      onChange={(e) =>
                                        updateFloorRoom(floorIdx, roomIdx, {
                                          fileName: e.target.files?.[0]?.name || null,
                                        })
                                      }
                                      className="sr-only"
                                    />
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* SECTION B: RUANGAN TERTENTU */
                  <div className="flex flex-col gap-5">
                    <div className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between gap-4">
                      <div className="flex flex-col gap-0.5">
                        <label
                          htmlFor="home-room-only-count"
                          className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface"
                        >
                          Total Ruangan
                        </label>
                        <span className="font-body text-body-md text-light-on-surface-muted dark:text-dark-on-surface-muted">
                          Jumlah ruangan yang ingin dibersihkan.
                        </span>
                      </div>
                      <div className="flex items-center border border-light-border dark:border-dark-border rounded-sm bg-light-surface-card dark:bg-dark-surface-card shrink-0">
                        <button
                          type="button"
                          onClick={() => setSpecificRoomCount(specificRooms.length - 1)}
                          aria-label="Kurangi total ruangan"
                          className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-r border-light-border dark:border-dark-border cursor-pointer"
                        >
                          -
                        </button>
                        <input
                          id="home-room-only-count"
                          type="number"
                          min={1}
                          max={20}
                          value={specificRooms.length}
                          onChange={(e) => setSpecificRoomCount(parseInt(e.target.value, 10))}
                          className="w-12 h-9 text-center border-0 bg-transparent font-mono text-body-md tabular-nums text-light-on-surface dark:text-dark-on-surface focus:outline-none p-0"
                        />
                        <button
                          type="button"
                          onClick={() => setSpecificRoomCount(specificRooms.length + 1)}
                          aria-label="Tambah total ruangan"
                          className="w-9 h-9 flex items-center justify-center font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:bg-light-surface-secondary dark:hover:bg-dark-surface-secondary border-l border-light-border dark:border-dark-border cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {specificRooms.map((room, roomIdx) => (
                        <div
                          key={roomIdx}
                          className="p-4 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card flex flex-col gap-3.5"
                        >
                          <span className="font-mono text-mono-sm uppercase text-light-primary dark:text-dark-accent-blue">
                            RUANGAN {pad2(roomIdx + 1)}
                          </span>
                          <div className="flex flex-col gap-1.5">
                            <label className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                              Nama Ruangan
                            </label>
                            <select
                              value={room.roomType}
                              onChange={(e) =>
                                updateSpecificRoom(roomIdx, { roomType: e.target.value })
                              }
                              className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                            >
                              <option value="Gudang">Gudang</option>
                              <option value="Kamar">Kamar</option>
                              <option value="Dapur">Dapur</option>
                              <option value="Kamar Mandi">Kamar Mandi</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                              Deskripsi Ruangan
                            </label>
                            <textarea
                              rows={2}
                              required
                              value={room.description}
                              onChange={(e) =>
                                updateSpecificRoom(roomIdx, { description: e.target.value })
                              }
                              placeholder="Contoh: Kerak keramik kamar mandi, area wastafel dan kaca"
                              className="w-full px-3.5 py-2.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-on-surface dark:text-dark-on-surface font-body text-body-md focus:outline-none focus:border-light-primary dark:focus:border-dark-primary"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                              Gambar Ruangan
                            </span>
                            <label className="cursor-pointer rounded-sm border border-dashed border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-4 flex items-center justify-between gap-3 transition-colors duration-state-change hover:border-light-primary dark:hover:border-dark-primary">
                              <div className="flex items-center gap-3 min-w-0">
                                <svg
                                  className="w-6 h-6 shrink-0 text-light-on-surface-muted dark:text-dark-on-surface-muted"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  aria-hidden="true"
                                >
                                  <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="16"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                  />
                                  <circle cx="8.5" cy="9.5" r="1.5" />
                                  <path
                                    d="M21 16l-5-5-6 6-3-3-4 4"
                                    strokeLinecap="square"
                                    strokeLinejoin="miter"
                                  />
                                </svg>
                                <span
                                  className={`font-body text-body-md truncate ${
                                    room.fileName
                                      ? 'text-light-on-surface dark:text-dark-on-surface'
                                      : 'text-light-on-surface-muted dark:text-dark-on-surface-muted'
                                  }`}
                                >
                                  {room.fileName || 'Unggah foto ruangan (JPG, PNG)'}
                                </span>
                              </div>
                              <span className="shrink-0 px-3 py-1.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-card dark:bg-dark-surface-card font-label text-label-lg text-light-on-surface dark:text-dark-on-surface">
                                Pilih Foto
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  updateSpecificRoom(roomIdx, {
                                    fileName: e.target.files?.[0]?.name || null,
                                  })
                                }
                                className="sr-only"
                              />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Single Submit Button */}
                <div className="pt-4 border-t border-light-border dark:border-dark-border flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-sm bg-deep-navy dark:bg-dark-primary text-on-deep-navy dark:text-dark-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-brand-blue dark:hover:bg-dark-accent-blue cursor-pointer"
                  >
                    <span>Submit Jadwal</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="py-6 flex flex-col gap-4">
                <span className="inline-flex w-fit px-2.5 py-1 rounded-sm bg-success text-on-success font-mono text-mono-sm uppercase">
                  JADWAL DIAJUKAN
                </span>
                <p className="font-body text-body-md text-light-on-surface dark:text-dark-on-surface">
                  {submittedSummary}
                </p>
                <div className="pt-2">
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-light-border dark:border-dark-border font-label text-label-lg text-light-on-surface dark:text-dark-on-surface hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-state-change"
                  >
                    <span>Kembali ke Menu Layanan</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
