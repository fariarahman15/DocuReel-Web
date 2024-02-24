import teamMembers from "@/app/lib/teamData";
import Member from "./Member";

const Team = () => {
  return (
    <div className="grid grid-cols-4 gap-6 justify-center">
      {teamMembers.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          role={member.role}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
};

export default Team;
