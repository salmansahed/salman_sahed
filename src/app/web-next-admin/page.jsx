"use client";

import React, { useState } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  TextArea,
  Description,
  FieldError,
  Button,
  Card,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const WebNextAdmin = () => {
  const router = useRouter();
  const [techStack, settechStack] = useState([""]);
  const [keyFeatures, setKeyFeatures] = useState([""]);
  const [challenges, setChallenges] = useState([""]);
  const [keyLearning, setKeyLearning] = useState([""]);
  const [futurePlans, setFuturePlans] = useState([""]);

  const handleAddField = (state, setState) => {
    setState([...state, ""]);
  };

  const handleFieldChange = (index, value, state, setState) => {
    const updatedState = [...state];
    updatedState[index] = value;
    setState(updatedState);
  };

  const handleRemoveField = (index, state, setState) => {
    if (state.length > 1) {
      const updatedState = state.filter((_, i) => i !== index);
      setState(updatedState);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const projectData = {
      title: formData.get("title"),
      image: formData.get("image"),
      liveLink: formData.get("liveLink"),
      githubLink: formData.get("githubLink"),
      description: formData.get("description"),
      techStack: techStack
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      keyFeatures: keyFeatures
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      challenges: challenges
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      keyLearning: keyLearning
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      futurePlans: futurePlans
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Project added successfully", {
        position: "top-center",
      });
      e.target.reset();
      settechStack([""]);
      setKeyFeatures([""]);
      setChallenges([""]);
      setKeyLearning([""]);
      setFuturePlans([""]);
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };

  const renderHeroUIDynamicSection = (title, state, setState, placeholder) => (
    <div className="bg-[#182235] p-5 rounded-2xl border border-gray-800/60 w-full">
      <Label
        isRequired
        className="text-sm font-semibold text-gray-300 block mb-2"
      >
        {title}
      </Label>
      <div className="space-y-3">
        {state.map((item, index) => (
          <div key={index} className="flex gap-2 items-center w-full">
            <TextField
              isRequired
              className="w-full"
              onChange={(value) =>
                handleFieldChange(index, value, state, setState)
              }
            >
              <Input
                value={item}
                placeholder={`${placeholder} #${index + 1}`}
                className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm"
              />
              <FieldError className="text-xs text-red-400 mt-1" />
            </TextField>

            {state.length > 1 && (
              <Button
                type="button"
                variant="light"
                onClick={() => handleRemoveField(index, state, setState)}
                className="bg-red-950/40 border border-red-900/60 text-red-400 rounded-xl hover:bg-red-900 hover:text-white transition-all h-11.5"
              >
                Delete
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="light"
        onClick={() => handleAddField(state, setState)}
        className="mt-3 text-xs font-medium text-blue-400 hover:text-blue-300 transition-all p-0 bg-transparent min-w-0 h-auto"
      >
        + Add More Item
      </Button>
    </div>
  );

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully", {
      position: "top-center",
    });
    router.refresh();
  };
  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 min-h-screen text-white bg-[#0a0f1d] mt-26 mb-10">
      <Card className="bg-[#111827] border border-gray-800 shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8">
        <Form onSubmit={handleSubmit} className="w-full space-y-6">
          <Fieldset className="w-full gap-6">
            <div className="border-b border-gray-800 pb-4 w-full">
              <Fieldset.Legend className="text-2xl font-bold bg-linear-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Project Admin Panel
              </Fieldset.Legend>
              <Description className="text-gray-400 text-sm mt-1">
                Create and publish a new project to your portfolio dynamically.
              </Description>
            </div>

            <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <TextField isRequired name="title">
                <Label className="text-xs font-medium text-gray-400">
                  Project Title
                </Label>
                <Input
                  placeholder="Enter Project Title"
                  className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm mt-1"
                />
                <FieldError className="text-xs text-red-400 mt-1" />
              </TextField>

              <TextField isRequired name="image" type="url">
                <Label className="text-xs font-medium text-gray-400">
                  Project Image URL
                </Label>
                <Input
                  placeholder="Enter Image URL"
                  className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm mt-1"
                />
                <FieldError className="text-xs text-red-400 mt-1" />
              </TextField>
            </Fieldset.Group>

            <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <TextField isRequired name="liveLink" type="url">
                <Label className="text-xs font-medium text-gray-400">
                  Live Preview URL
                </Label>
                <Input
                  placeholder="Enter Live Preview URL"
                  className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm mt-1"
                />
                <FieldError className="text-xs text-red-400 mt-1" />
              </TextField>

              <TextField isRequired name="githubLink" type="url">
                <Label className="text-xs font-medium text-gray-400">
                  Source Code URL
                </Label>
                <Input
                  placeholder="Enter Source Code URL"
                  className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm mt-1"
                />
                <FieldError className="text-xs text-red-400 mt-1" />
              </TextField>
            </Fieldset.Group>

            <TextField isRequired name="description" className="w-full">
              <Label className="text-xs font-medium text-gray-400">
                Project Description
              </Label>
              <TextArea
                placeholder="Write a modern and detailed overview of your project..."
                className="w-full bg-transparent border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm mt-1 min-h-25 resize-y"
              />
              <FieldError className="text-xs text-red-400 mt-1" />
            </TextField>

            <Fieldset.Group className="grid grid-cols-1 gap-6 w-full">
              {renderHeroUIDynamicSection(
                "Tech Stack & Technologies",
                techStack,
                settechStack,
                "e.g., React / Tailwind",
              )}
              {renderHeroUIDynamicSection(
                "Key Features",
                keyFeatures,
                setKeyFeatures,
                "Enter feature details",
              )}
              {renderHeroUIDynamicSection(
                "Challenges Faced",
                challenges,
                setChallenges,
                "Enter challenge details",
              )}
              {renderHeroUIDynamicSection(
                "Key Learning",
                keyLearning,
                setKeyLearning,
                "Enter what you learned",
              )}
              {renderHeroUIDynamicSection(
                "Future Plans",
                futurePlans,
                setFuturePlans,
                "Enter future plan details",
              )}
            </Fieldset.Group>

            <Fieldset.Actions className="flex justify-end gap-3 pt-6 border-t border-gray-800 w-full">
              <Button
                onClick={handleLogOut}
                variant="danger"
                className="w-full rounded-xl"
              >
                LogOut
              </Button>
              <Button
                type="reset"
                variant="outline"
                className="text-gray-400 border-gray-800 hover:bg-gray-800 px-6 py-5 rounded-xl text-sm font-medium w-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-5 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-sm w-full"
              >
                Publish Project
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </Card>
    </div>
  );
};

export default WebNextAdmin;
