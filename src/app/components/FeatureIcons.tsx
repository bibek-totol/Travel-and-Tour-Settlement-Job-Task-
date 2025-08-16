import { FaWallet, FaCamera, FaClipboardList, FaHandsHelping } from "react-icons/fa";

const features = [
  { icon: <FaWallet className="text-orange-500 text-2xl" />, text: "Ultimate flexibility" },
  { icon: <FaCamera className="text-orange-500 text-2xl" />, text: "Memorable experiences" },
  { icon: <FaClipboardList className="text-orange-500 text-2xl" />, text: "Quality at our core" },
  { icon: <FaHandsHelping className="text-orange-500 text-2xl" />, text: "Award-winning support" },
];

export default function FeatureIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto py-12">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center space-y-2">
          {f.icon}
          <p className="text-gray-700 font-medium">{f.text}</p>
        </div>
      ))}
    </div>
  );
}
