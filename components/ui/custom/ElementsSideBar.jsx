"use client"
import Layout from "@/Data/Layout";
import React from "react";
import ElementsLayoutCard from "./ElementsLayoutCard";
import ElementList from "@/Data/ElementList";
import { useDragElementLayout } from "@/app/provider";

function ElementsSideBar() { 
  const {dragElementLayout , setDragElementLayout} = useDragElementLayout();
  console.log("Dragging:", dragElementLayout);
  const onDragLayoutStart = (layout)=>{
    setDragElementLayout({
      dragLayout:{
        ...layout,
        id:Date.now()
      }
    })
  }

  const onDragElementStart=(element)=>{
    setDragElementLayout({
      
      dragElement:{
        ...element,
        id:Date.now()
      }
    })
  }

  return (
    <div className="p-5 h-screen shadow-sm">
      <h2 className="font-bold text-lg">Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {Layout.map((layout, index) => {
          return (
          <div key={index} draggable onDragStart={()=>{
            onDragLayoutStart(layout);
          }}>
          <ElementsLayoutCard layout={layout}/>
          </div>);
        })}
      </div>
      <h2 className="font-bold text-lg mt-9">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
        {ElementList.map((element, index) => {
          return (
          <div key={index} draggable onDragStart={()=>onDragElementStart(element)}>
          <ElementsLayoutCard layout={element}/>
          </div>);
        })}
      </div>
    </div>
  );
}

export default ElementsSideBar;
