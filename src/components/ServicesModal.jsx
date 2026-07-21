"use client";

import { Button, Modal } from "@heroui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const ServicesModal = ({ details, description, title }) => {
  // console.log("details =>", details);
  return (
    <div>
      <Modal>
        <Button className="flex items-center gap-2 text-sm text-gray-600 font-medium group-hover:translate-x-2 transition-transform bg-transparent px-0 py-0">
          View Details <FaArrowRight className="text-xs" />
        </Button>
        <Modal.Backdrop
          className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
          variant="blur"
        >
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-100 bg-white/20 border border-white/30 p-12">
              <Modal.Header className="items-center text-center">
                <Modal.Heading className="text-gray-100 text-xl font-semibold">
                  {title}
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p className="text-center text-gray-300">{description}</p>
                <ul className="space-y-4 mt-8">
                  {details?.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <FaCheckCircle className="text-xl" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.CloseTrigger />
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ServicesModal;
