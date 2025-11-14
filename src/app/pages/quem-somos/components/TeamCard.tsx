import Image from 'next/image';
import type { TeamMember } from '../types';

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      data-name={`team-${member.id}`}
      className="flex flex-col items-start gap-3 p-4 bg-white/90 rounded shadow-sm"
    >
      <div className="w-full flex items-center gap-3">
        <div className="w-14 h-14 relative rounded-full overflow-hidden bg-gray-100">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base">{member.name}</div>
          <div className="text-sm text-black/60">{member.role}</div>
        </div>
      </div>
    </article>
  );
}
