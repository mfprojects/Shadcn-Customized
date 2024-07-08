'use client';
import { useState } from 'react';
import ArchiText, { ArchiTextProps } from '@/components/ArchiText';
import UserForm from '../../components/UserForm';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import ImageBox, { ImageBoxProps } from '@/components/ImageBox';
import { SheetComponent } from '@/components/SheetComponent';

export default function CustomComponents() {
  type ComponentKey = 'Carousel' | 'UserForm' | 'ArchiText' | 'ImageBox';
  const [selectedComponentKey, setSelectedComponentKey] =
    useState<ComponentKey>('Carousel');
  const [isArchiTextSheetVisible, setIsArchiTextSheetVisible] = useState(false);
  const [isImageBoxSheetVisible, setIsImageBoxSheetVisible] = useState(false);

  const [archiTextProps, setArchiTextProps] = useState<ArchiTextProps>({
    text: 'Responsively designed',
    fontSize: 30,
    fontColor: 'url(#gradient)',
    gradientStart: '#cae9fb',
    gradientEnd: '#38B5F8',
    width: 500,
    height: 200,
    bendDegree: -10,
  });

  const [imageBoxProps, setImageBoxProps] = useState<ImageBoxProps>({
    imgSrc:
      'https://images.unsplash.com/photo-1717501219345-06ea2bf3eb80?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with your image path
  });

  const components = {
    Carousel: CarouselDApiDemo,
    UserForm: UserForm,
    ArchiText: () => <ArchiText {...archiTextProps} />,
    ImageBox: () => <ImageBox {...imageBoxProps} />,
  };

  const ComponentToRender = components[selectedComponentKey];

  const handleArchiTextClick = () => {
    setSelectedComponentKey('ArchiText');
    setIsArchiTextSheetVisible(true);
    setIsImageBoxSheetVisible(false);
  };

  const handleImageBoxClick = () => {
    setSelectedComponentKey('ImageBox');
    setIsImageBoxSheetVisible(true);
    setIsArchiTextSheetVisible(false);
  };

  const handleArchiTextPropsChange = (newProps: ArchiTextProps) => {
    setArchiTextProps(newProps);
    setIsArchiTextSheetVisible(false); // Hide the sheet after saving changes
  };

  const handleImageBoxPropsChange = (newProps: ImageBoxProps) => {
    setImageBoxProps(newProps);
    setIsImageBoxSheetVisible(false); // Hide the sheet after saving changes
  };

  return (
    <div className="top-level-div flex flex-col min-h-screen ">
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-52 md:min-h-screen md:bg-[#051A39] md:p-4">
          <div className="md:sticky md:top-20">
            <div className="hidden md:block divide-y divide-dashed divide-gray-600">
              <h2 className="text-xl font-medium text-white mb-4">
                Component to display
              </h2>
              <ul className="space-y-2 pt-4">
                {Object.keys(components).map((componentName) => (
                  <li key={componentName}>
                    <div className="flex flex-col">
                      <button
                        className={`w-full text-left px-4 py-2 rounded ${
                          selectedComponentKey === componentName
                            ? 'bg-highlightColor'
                            : 'text-gray-300 hover:bg-highlightColor/50'
                        }`}
                        onClick={() => {
                          if (componentName === 'ArchiText') {
                            handleArchiTextClick();
                          } else if (componentName === 'ImageBox') {
                            handleImageBoxClick();
                          } else {
                            setSelectedComponentKey(
                              componentName as ComponentKey
                            );
                            setIsArchiTextSheetVisible(false);
                            setIsImageBoxSheetVisible(false);
                          }
                        }}
                      >
                        {componentName}
                      </button>
                      {componentName === 'ArchiText' &&
                        isArchiTextSheetVisible && (
                          <div className="mt-2 transform transition-transform duration-300 ease-out">
                            <SheetComponent
                              props={archiTextProps}
                              buttonText="Edit Props"
                              onSubmit={handleArchiTextPropsChange}
                              buttonClassName="text-left text-wrap"
                            />
                          </div>
                        )}
                      {componentName === 'ImageBox' &&
                        isImageBoxSheetVisible && (
                          <div className="mt-2 transform transition-transform duration-300 ease-out">
                            <SheetComponent
                              props={imageBoxProps}
                              buttonText="Edit Props"
                              onSubmit={handleImageBoxPropsChange}
                              buttonClassName="text-left text-wrap"
                            />
                          </div>
                        )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow px-2 py-2">
          <div className="max-w-screen-3xl mx-auto">
            <div className="flex flex-col justify-center min-h-[192px] items-center text-center w-full mb-1 md:mb-0">
              <div>
                <h1 className="flex-auto text-5xl font-bold text-wrap text-center md:text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D19757] from-10% to-orange-500 to-100% animate-fade-in-down w-fit px-4 my-8 py-4 relative">
                  Component Collection
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-1 bg-gradient-to-r from-color10 from-10% to-color30 to-100%"></span>
                </h1>
              </div>
            </div>

            <div className="md:hidden bg-[#0F234C] p-4 mx-4 mt-12 sm:mt-0 rounded-lg mb-8 divide-y divide-dashed divide-gray-600 border-2 border-color30">
              <h2 className="divide-y-4 text-xl font-medium text-wrap text-textColor2 mb-4">
                Choose component
              </h2>
              <ul className="space-y-2 pt-4">
                {Object.keys(components).map((componentName) => (
                  <li key={componentName}>
                    <div className="flex flex-col">
                      <button
                        className={`w-full text-left px-4 py-2 rounded ${
                          selectedComponentKey === componentName
                            ? 'bg-color30 text-white'
                            : 'text-gray-300 hover:bg-color30/50'
                        }`}
                        onClick={() => {
                          if (componentName === 'ArchiText') {
                            handleArchiTextClick();
                          } else if (componentName === 'ImageBox') {
                            handleImageBoxClick();
                          } else {
                            setSelectedComponentKey(
                              componentName as ComponentKey
                            );
                            setIsArchiTextSheetVisible(false);
                            setIsImageBoxSheetVisible(false);
                          }
                        }}
                      >
                        {componentName}
                      </button>
                      {componentName === 'ArchiText' &&
                        isArchiTextSheetVisible && (
                          <div className="mt-2 transform transition-transform duration-300 ease-out">
                            <SheetComponent
                              props={archiTextProps}
                              buttonText="Edit ArchiText Properties"
                              onSubmit={handleArchiTextPropsChange}
                              buttonClassName="my-4"
                            />
                          </div>
                        )}
                      {componentName === 'ImageBox' &&
                        isImageBoxSheetVisible && (
                          <div className="mt-2 transform transition-transform duration-300 ease-out">
                            <SheetComponent
                              props={imageBoxProps}
                              buttonText="Edit ImageBox Properties"
                              onSubmit={handleImageBoxPropsChange}
                              buttonClassName="my-4"
                            />
                          </div>
                        )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col h-screen mx-auto p-0 rounded-md">
              <ComponentToRender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
