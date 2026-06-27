"use client";

import { useEffect, useState } from "react";
import { FiPhoneCall, FiMapPin, FiExternalLink } from "react-icons/fi";

const branches = [
  {
    id: 1,
    name: "شعبه کاشان",
    address: "کاشان، خیابان امام خمینی، نرسیده به میدان کمال‌الملک، پلاک ۱۴۷",
    phone: "۰۳۱-۵۵۲۲۳۳۴۴",
    hours: "همه‌روزه ۱۰ صبح تا ۹ شب",
    lat: 33.9847,
    lng: 51.4113,
    mapUrl: "https://maps.google.com/?q=33.9847,51.4113",
  },
  {
    id: 2,
    name: "شعبه تهران",
    address: "تهران، سعادت‌آباد، میدان کتاب، بلوار کوهستان، خیابان ۲۴، پلاک ۸",
    phone: "۰۲۱-۲۲۳۳۸۵۵۶",
    hours: "همه‌روزه ۱۰ صبح تا ۱۰ شب",
    lat: 35.7946,
    lng: 51.3725,
    mapUrl: "https://maps.google.com/?q=35.7946,51.3725",
  },
];

function LeafletMap({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const [MapComponents, setMapComponents] = useState<any>(null);

  useEffect(() => {
    // dynamic import to avoid SSR issues
    Promise.all([
      import("react-leaflet"),
      import("leaflet"),
    ]).then(([rl, L]) => {
      // fix default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setMapComponents(rl);
    });
  }, []);

  if (!MapComponents) {
    return (
      <div className="w-full h-full min-h-[240px] bg-neutral-100 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <div className="w-6 h-6 border-2 border-neutral-300 border-t-[#10494b] rounded-full animate-spin" />
          <span className="text-xs">در حال بارگذاری نقشه...</span>
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", minHeight: "240px", borderRadius: "16px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default function Maps() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <section dir="rtl">
        <div className="mb-6">
          <p className="text-xs text-[#10494b] font-semibold tracking-widest mb-1">موقعیت ما</p>
          <h2 className="text-xl md:text-2xl font-black text-neutral-800 font-yekan">
            شعبه‌های گالری طلا امیری
          </h2>
          <div className="w-10 h-1 bg-[#10494b] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-md duration-300"
            >
              {/* نقشه */}
              <div className="h-56 w-full relative">
                <LeafletMap lat={branch.lat} lng={branch.lng} name={branch.name} />
              </div>

              {/* اطلاعات */}
              <div className="p-5 pt-8 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-bold text-neutral-800 font-yekan">
                    {branch.name}
                  </h3>
                  <span className="text-[11px] bg-[#10494b]/8 text-[#10494b] font-semibold px-2.5 py-1 rounded-lg">
                    گالری امیری
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-[13px] text-neutral-500">
                  <FiMapPin className="w-4 h-4 shrink-0 text-[#10494b] mt-0.5" />
                  <span className="leading-6">{branch.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[13px] text-neutral-500">
                  <FiPhoneCall className="w-4 h-4 shrink-0 text-[#10494b]" />
                  <a
                    href={`tel:${branch.phone.replace(/-/g, "")}`}
                    className="hover:text-[#10494b] transition-colors duration-200"
                    dir="ltr"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="h-px bg-neutral-100" />

                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-neutral-400">{branch.hours}</span>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#10494b] hover:text-[#0d3e40] transition-colors duration-200"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    مسیریابی
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}