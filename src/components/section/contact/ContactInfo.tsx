import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

type SocialLinksType = {
  github: string;
  linkedin: string;
  twitter: string;
};

type PersonalInfoType = {
  email: string;
  location: string;
  social: SocialLinksType;
};

const ContactInfo = ({ personalInfo, itemVariants }: { personalInfo: PersonalInfoType; itemVariants: any }) => {
  return (
    <>
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <motion.div
          className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.08)] hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)]"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Mail className="text-[#06b6d4] mx-auto mb-4" size={32} />
          <h3 className="text-[1.25rem] font-semibold text-white mb-3">
            Email Me
          </h3>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[1rem] text-white/70 hover:text-[#06b6d4] transition-colors duration-300"
          >
            {personalInfo.email}
          </a>
        </motion.div>

        <motion.div
          className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.08)] hover:border-[#06b6d4] hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)]"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <MapPin className="text-[#06b6d4] mx-auto mb-4" size={32} />
          <h3 className="text-[1.25rem] font-semibold text-white mb-3">
            Location
          </h3>
          <p className="text-[1rem] text-white/70">{personalInfo.location}</p>
        </motion.div>

  <SocialLinks links={personalInfo.social} />
      </motion.div>
    </>
  );
};

export default ContactInfo;
