import packagesData from "@/packagesList";
import image1 from "../assets/package-picture1.jpg"
import Image from "next/image";
export default function Packages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.isArray(packagesData.packages) &&
        packagesData.packages.map((packages) => (
          <div key={packages.name} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <Image src={packages.image} alt={packages.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{packages.name}</h2>
              <p>{packages.description}</p>
              <p>Price -{packages.price} euros</p>
              <div className="card-actions">
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
