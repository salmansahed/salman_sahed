import { Button, Modal } from "@heroui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const ServicesModal = ({ details, description, title }) => {
  return (
    <div>
      <Modal>
        {/* Trigger Button */}
        <Button
          variant="tertiary"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 bg-transparent hover:bg-transparent px-0 py-0 cursor-pointer transition-colors duration-300"
        >
          <span>View Details</span>
          <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
        </Button>

        {/* Modal Backdrop */}
        <Modal.Backdrop
          className="bg-black/50 dark:bg-black/75 backdrop-blur-md transition-all"
          variant="blur"
        >
          <Modal.Container>
            {/* Modal Glass Dialog Box */}
            <Modal.Dialog className="sm:max-w-md w-full rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-white/60 dark:border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden transition-all">
              {/* Subtle Ambient Glows inside Modal */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/20 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-purple-500/20 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Modal Header */}
              <Modal.Header className="flex flex-col items-center text-center gap-2 pb-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                  <HiSparkles className="text-amber-500" />
                  <span>SERVICE INCLUDES</span>
                </div>
                <Modal.Heading className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {title}
                </Modal.Heading>
              </Modal.Header>

              {/* Modal Body */}
              <Modal.Body className="mt-4 space-y-5">
                {/* Description Box */}
                {description && (
                  <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed text-center">
                    {description}
                  </div>
                )}

                {/* Details List */}
                <ul className="space-y-2.5">
                  {details?.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/60 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-blue-500/30 dark:hover:border-purple-400/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <FaCheckCircle className="text-sm sm:text-base" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </Modal.Body>

              {/* Close Button */}
              <Modal.CloseTrigger />
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ServicesModal;
