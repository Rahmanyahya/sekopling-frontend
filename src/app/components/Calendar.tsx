"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Tipe data untuk kegiatan jadwal
type ScheduleActivity = {
  id: number;
  activity: string;
  time: string;
  teacher: string;
};

// Dummy data
const dummySchedule: ScheduleActivity[] = [
  { id: 0, activity: "Upacara", time: "06.30 - 07.15", teacher: "-" },
  { id: 0, activity: "Doa / Dhuha", time: "07.15 - 07.45", teacher: "-" },
  {
    id: 1,
    activity: "Tahfidz",
    time: "07.45 - 08.30",
    teacher: "Nico Rachmacandrana, S.ST.",
  },
  {
    id: 2,
    activity: "Matematika",
    time: "08.30 - 09.15",
    teacher: "Dra. Sinta Nurmala",
  },
  { id: 3, activity: "Istirahat", time: "09.15 - 09.30", teacher: "-" },
  {
    id: 4,
    activity: "Fisika",
    time: "09.30 - 10.15",
    teacher: "Budi Santoso, M.Pd.",
  },
  {
    id: 5,
    activity: "Bahasa Inggris",
    time: "10.15 - 11.00",
    teacher: "Riana Dewi, S.S.",
  },
];

// Data hari dan tanggal untuk header
const daysData = [
  { id: 1, name: "Senin", active: true },
  { id: 2, name: "Selasa", active: false },
  { id: 3, name: "Rabu", active: false },
  { id: 4, name: "Kamis", active: false },
  { id: 5, name: "Jumat", active: false },
  { id: 6, name: "Sabtu", active: false },
];

export default function Calendar() {
  // State untuk menyimpan data jadwal
  const [scheduleData, setScheduleData] =
    useState<ScheduleActivity[]>(dummySchedule);
  const [selectedDay, setSelectedDay] = useState(1); // Default: Senin
  const [currentDate, setCurrentDate] = useState("16 September 2024");

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Di sini tempat untuk fetch data api
    // Contoh:
    // const fetchSchedule = async () => {
    //   try {
    //     const response = await fetch(`/api/schedule?day=${selectedDay}`);
    //     const data = await response.json();
    //     setScheduleData(data);
    //   } catch (error) {
    //     console.error("Error fetching schedule:", error);
    //   }
    // };
    //
    // fetchSchedule();

    // Untuk demo, kita gunakan dummy data
  }, [selectedDay]); // Refetch when selected day changes

  // Handle perubahan hari
  const handleDayChange = (dayId: number) => {
    setSelectedDay(dayId);
    // Dalam aplikasi nyata, ini akan memicu fetch data baru
  };

  return (
    <>
      <div
        data-aos="fade-up"
        className="w-full h-full bg-white rounded-[8px] border border-red100 shadow-[0_0_5px_0_rgba(255,0,0,0.5)]"
      >
        <div className="m-[10px] md:m-[12px]">
          {/* Header */}
          <div className="w-full h-auto py-3 md:h-[48px] bg-red400 rounded-[4px] items-center text-white flex justify-center">
            <h5 className="text-[14px] sm:text-[16px] font-semibold px-2 text-center">
              Jadwal Pelajaran Hari Ini
            </h5>
          </div>

          {/* Day selector */}
          <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-3 mb-2">
            {daysData.map((day) => (
              <button
                key={day.id}
                onClick={() => handleDayChange(day.id)}
                className={`flex-1 min-w-[60px] h-[40px] md:h-[48px] rounded-[4px] text-white flex justify-center items-center p-2
                  ${selectedDay === day.id ? "bg-red500" : "bg-red300"}`}
              >
                <h5 className="text-[12px] md:text-[16px] font-medium">
                  {day.name}
                </h5>
              </button>
            ))}
          </div>

          {/* Date display */}
          <div className="w-full h-[40px] md:h-[48px] rounded-[4px] text-white flex justify-center items-center p-[10px] bg-red500 mb-3">
            <h5 className="text-[12px] md:text-[16px] font-semibold">
              {currentDate}
            </h5>
          </div>

          {/* Table header */}
          <div className="flex gap-x-[8px] sm:gap-x-[12px]">
            <div className="w-[40px] sm:w-[56px] h-[48px] rounded-[4px] flex justify-center items-center border border-red300 p-[8px] sm:p-[12px]">
              <h5 className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-red300">
                No
              </h5>
            </div>
            <div className="flex-grow h-[48px] rounded-[4px] flex justify-center items-center border border-red300 p-[8px] sm:p-[12px]">
              <h5 className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-red300">
                Kegiatan
              </h5>
            </div>
            <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[48px] rounded-[4px] flex justify-center items-center border border-red300 p-[8px] sm:p-[12px]">
              <h5 className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-red300">
                Jam
              </h5>
            </div>
            <div className="hidden sm:flex w-[100px] md:w-[160px] h-[48px] rounded-[4px] justify-center items-center border border-red300 p-[8px] sm:p-[12px]">
              <h5 className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-red300">
                Pengajar
              </h5>
            </div>
          </div>
        </div>

        {/* Schedule Content - Map through data */}
        <div className="overflow-y-auto max-h-[400px]">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="border flex gap-x-[8px] sm:gap-x-[12px] border-b border-t-0 border-l-0 border-r-0 border-red100 w-full px-[8px] sm:px-[12px] py-[8px]"
            >
              <div className="w-[40px] sm:w-[56px] flex justify-center items-center p-[8px] sm:p-[12px]">
                <p className="text-gray300 text-center text-[10px] sm:text-[12px] md:text-[14px]">
                  {item.id || "-"}
                </p>
              </div>
              <div className="flex-grow flex justify-center items-center p-[8px] sm:p-[12px]">
                <p className="text-gray300 text-center text-[10px] sm:text-[12px] md:text-[14px]">
                  {item.activity}
                </p>
              </div>
              <div className="w-[90px] sm:w-[100px] md:w-[120px] flex justify-center items-center p-[8px] sm:p-[12px]">
                <p className="text-gray300 text-center text-[10px] sm:text-[12px] md:text-[14px]">
                  {item.time}
                </p>
              </div>
              <div className="hidden sm:flex w-[100px] md:w-[160px] justify-center items-center p-[8px] sm:p-[12px]">
                <p className="text-gray300 text-center text-[10px] sm:text-[12px] md:text-[14px]">
                  {item.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
