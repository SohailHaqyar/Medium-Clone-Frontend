import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import axios from "axios";
import { useHistory } from "react-router-dom";

const URL = `http://localhost:8000/articles`;

const data = {
  blocks: [
    {
      id: "GSVKgaLlAJ",
      type: "header",
      data: {
        text: "Start here",
        level: 1,
      },
    },
  ],
  version: "2.22.1",
};
export const CreatePost = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    data: data,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Enter a header",
          defaultLevel: 1,
        },
        inlineToolbar: true,
      },
      code: {
        class: CodeTool,
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
    },
  });

  const history = useHistory();

  const handlePublish = async () => {
    const { blocks }: any = await editor.save();
    console.log(blocks);
    const title = blocks[0].data.text;
    const formattedBlocks = [];
    for (const b of blocks) {
      formattedBlocks.push({ type: b.type, ...b.data });
    }
    console.log(formattedBlocks);
    const body = {
      title,
      blocks: formattedBlocks,
    };

    const response = await axios.post(URL, body);
    if (response.status === 201) {
      history.push("/");
    } else {
      console.log(response);
      alert("NOT PUBLISHED");
    }
  };
  return (
    <div className="flex items-center p-5 flex-col">
      <div id="editorjs"></div>
      <button
        className="bg-gray-700  text-white p-2 rounded uppercase mt-2 w-2/3"
        onClick={handlePublish}
      >
        Publish Article
      </button>
    </div>
  );
};
