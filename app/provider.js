"use client";
import React, { useContext, useEffect, useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserDetailContext } from "@/context/UserDetailContext";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { DragDropLayoutElement } from "@/context/DragDropLayoutElement";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState('desktop');
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = JSON.parse(localStorage.getItem("userDetail"));
      const emailTemplateStorage = JSON.parse(localStorage.getItem('emailTemplate'));
      setEmailTemplate(emailTemplateStorage??[]);
      if (!storage?.email || !storage) { 
        //  Redirect to Home Screen
      } else {
        setUserDetail(storage);
      }
    }
  }, []);

  useEffect(()=>{
    if(typeof window!==undefined)
    {
      localStorage.setItem('emailTemplate', JSON.stringify(emailTemplate))
    }
  },[emailTemplate])

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
          <ScreenSizeContext.Provider value={{screenSize, setScreenSize}}>
            <DragDropLayoutElement.Provider value={{dragElementLayout, setDragElementLayout}}>
              <EmailTemplateContext.Provider value={{emailTemplate, setEmailTemplate}}>
                <div>{children}</div>
              </EmailTemplateContext.Provider>
            </DragDropLayoutElement.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};
export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
export const useDragElementLayout = () => {
  return useContext(DragDropLayoutElement);
};
export const useEmailTemplate = () => {
  return useContext(EmailTemplateContext);
};