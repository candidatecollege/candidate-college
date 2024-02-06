"use client";

import Profile from "@/components/admin/dashboard/Profile";
import SearchNav from "@/components/admin/dashboard/SearchNav";
import Pagination from "@/components/admin/dashboard/Pagination";

import {applicant, applicantDataType} from "../../../../../../data/applicantData";
import { CardCandidate } from "@/components/admin/dashboard/CardCandidate";

export default function DashboardPage() {
  return (
    <main className="p-6 py-4 pb-8 ml-[266px] hidden lg:block">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div className="py-4">
          <h1 className="text-[57px] font-normal leading-[58px]">Profile</h1>
          <span className="text-[16px] text-gray">
            Your Candidate's Profile
          </span>
        </div>
        <div className="flex">
          <SearchNav />
          <Profile />
        </div>
      </section>

      {/* Card */}
      <section className="flex flex-wrap mt-6">
       {applicant.map(data => (
        <CardCandidate
            img={"/decoration/example-candidate-image.png"} 
            name={data.name} 
            division={data.division} 
            email={`mailto: ${data.email}`}
            phoneNumber={`https://wa.me/${data.phoneNumber}`}
        />
        ))}
      </section>

      {/* Footer */}
      <section className="flex items-center justify-between pt-5">
        <div>
          <span className="text-[#00000081] text-[14px]">
            Showing 1 to 10 of 20, 567 entries
          </span>
        </div>
        <div>
          <Pagination />
        </div>
        <div className="flex gap-1">
          <span>show</span>
          <select
            className="bg-primary text-white rounded-lg text-[10px]"
            name=""
            id=""
          >
            <option defaultChecked>10</option>
            <option defaultChecked>20</option>
          </select>
          <span>entries</span>
        </div>
      </section>
    </main>
  );
}
