'use client';
import { useState } from 'react';
import { PopoverComponent } from '@/components/Popover';
import ArchiText, { ArchiTextProps } from '@/components/ArchiText';
import UserForm from '../../components/UserForm';
import { CarouselDApiDemo } from '@/components/CarouselApiDemo';
import ImageBox from '@/components/ImageBox';

export default function CustomComponents() {
  type ComponentKey = 'Carousel' | 'UserForm' | 'ArchiText' | 'ImageBox';
  const [selectedComponentKey, setSelectedComponentKey] =
    useState<ComponentKey>('ImageBox');
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const [archiTextProps, setArchiTextProps] = useState<ArchiTextProps>({
    text: 'Responsively designed',
    fontSize: 32,
    fontColor: 'url(#gradient)',
    gradientStart: '#082043',
    gradientEnd: '#A855F7',
    width: 500,
    height: 100,
  });

  const components = {
    Carousel: CarouselDApiDemo,
    UserForm: UserForm,
    ArchiText: () => <ArchiText {...archiTextProps} />,
    ImageBox: ImageBox,
  };

  const ComponentToRender = components[selectedComponentKey];

  const handleArchiTextClick = () => {
    setSelectedComponentKey('ArchiText');
    setIsPopoverVisible((prev) => !prev);
  };

  const handleArchiTextPropsChange = (newProps: typeof archiTextProps) => {
    setArchiTextProps(newProps);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="lg:w-52 lg:min-h-screen lg:bg-[#0F234C] lg:p-4">
          <div className="lg:sticky lg:top-2">
            <div className="hidden lg:block divide-y divide-dashed divide-gray-600">
              <h2 className="text-xl font-medium text-white mb-4">
                Choose component to display
              </h2>
              <ul className="space-y-2 pt-4">
                {Object.keys(components).map((componentName) => (
                  <li key={componentName}>
                    <div className="flex flex-col">
                      <button
                        className={`w-full text-left px-4 py-2 rounded ${
                          selectedComponentKey === componentName
                            ? 'bg-highlightColor text-white'
                            : 'text-gray-300 hover:bg-highlightColor/50'
                        }`}
                        onClick={() => {
                          if (componentName === 'ArchiText') {
                            handleArchiTextClick();
                          } else {
                            setSelectedComponentKey(
                              componentName as ComponentKey
                            );
                            setIsPopoverVisible(false); // Hide popover when selecting other components
                          }
                        }}
                      >
                        {componentName}
                      </button>
                      {componentName === 'ArchiText' && isPopoverVisible && (
                        <div className="ml-4 mt-2">
                          <PopoverComponent
                            props={archiTextProps}
                            buttonText="Edit ArchiText Properties"
                            onSubmit={handleArchiTextPropsChange}
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
          <div className="max-w-screen-xl mx-auto">
            <ArchiText
              text={'Responsively designed'}
              fontSize={30}
              fontColor={'url(#gradient)'}
              gradientStart={'#082043'}
              gradientEnd={'#8312ef'}
              width={500}
              height={100}
            />

            <div className="flex flex-col justify-center items-center text-center w-full mb-1 lg:mb-0">
              <h1 className="subpixel-antialiased flex-auto text-5xl font-bold text-wrap text-center lg:text-center bg-clip-text text-transparent bg-gradient-to-r from-color60 to-[#0071c1] animate-fade-in-down w-fit px-4 mb-8 relative">
                Component Collection
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-1 bg-gradient-to-r from-color60 to-color30"></span>
              </h1>
            </div>

            <div className="lg:hidden bg-[#0F234C] p-4 rounded-lg mb-8 divide-y divide-dashed divide-gray-600 border-2 border-color30">
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
                          } else {
                            setSelectedComponentKey(
                              componentName as ComponentKey
                            );
                            setIsPopoverVisible(false); // Hide popover when selecting other components
                          }
                        }}
                      >
                        {componentName}
                      </button>
                      {componentName === 'ArchiText' && isPopoverVisible && (
                        <div className="ml-4 mt-2">
                          <PopoverComponent
                            props={archiTextProps}
                            buttonText="Edit ArchiText Properties"
                            onSubmit={handleArchiTextPropsChange}
                          />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full rounded-lg shadow-highlight2 bg-color10/10 border-2 border-color10 overflow-hidden p-4">
              <ComponentToRender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
