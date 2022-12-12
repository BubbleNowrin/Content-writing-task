import React from 'react';
import image from "../../../Assets/images/media@1670530336945@64344937.png"

const Home = () => {
    return (
        <div>
            <article class="px-4 py-8 mx-auto max-w-4xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
                <div class="w-full mx-auto mb-10 text-left ">
                    <div class="pb-6 mb-6 border-b border-gray-200">
                        <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-3xl font-serif uppercase" itemprop="headline" title="">
                            Getting battery stats of system using python
                        </h1>
                        <p class="text-base text-semibold">By teckturt official on 12/9/2022</p>
                    </div>
                    <div class="flex items-center mb-6 space-x-2">
                        <p class="text-black font-bold">Share this article</p>
                        <a href="#" class=" hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5 text-indigo-600" fill="currentColor">
                                <path
                                    d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
                                />
                            </svg>
                        </a>
                        <a href="#" class=" hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5 text-indigo-600" fill="currentColor">
                                <path
                                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                                />
                            </svg>
                        </a>
                        <a href="#" class=" hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5 text-indigo-600" fill="currentColor">
                                <circle cx="4.983" cy="5.009" r="2.188" />
                                <path
                                    d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"
                                />
                            </svg>
                        </a>
                    </div>
                    <img src={image} class="object-cover w-full  bg-center rounded" alt="" />
                </div>
                <div class=" py-6 sm:py-8 lg:py-12">
                    <div class="max-w-7xl px-4  mx-auto">

                        <p class=" sm:text-lg mb-6 md:mb-8">
                            <span className='text-red-600 font-bold text-md'>Hi there 👋,</span> <br />

                            Today we will see how we can find battery stats on our system using python3, so let's get started 🚀 <br /><br />

                            There is a python library called psutil which is used widely for retrieving information on running processes and system utilization (CPU, memory, disks, network, sensors) in Python. Explaining the whole library is not possible in a single article but for now, we will explain its function sensors_battery() which returns battery statistics.


                            <br />
                            <br />

                            sensors_battery() function doesn't take any argument as input, it returns battery status information as a named tuple including the following values. If no battery is installed or metrics can’t be determined None is returned.
                        </p>

                        <ul class="list-disc list-inside  sm:text-lg mb-6 md:mb-8">
                            <li><b>percent:</b> battery power left as a percentage.</li>
                            <li><b>secsleft:</b> a rough approximation of how many seconds are left before the battery runs out of power. If the AC power cable is connected this is set to <a href="https://psutil.readthedocs.io/en/latest/#psutil.POWER_TIME_UNLIMITED" className='underline font-semibold italic'>psutil.POWER_TIME_UNLIMITED</a>. If it can’t be determined it is set to <a href="https://psutil.readthedocs.io/en/latest/#psutil.POWER_TIME_UNKNOWN" className='underline font-semibold italic'>psutil.POWER_TIME_UNKNOWN.</a></li>
                            <li><b>power_plugged:</b> True if the AC power cable is connected, False if not, or None if it can’t be determined.</li>
                        </ul>

                        <blockquote class=" sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">Here is the script for using this function.</blockquote>

                        <div class="overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
                            <div className="mockup-code">
                                <pre data-prefix="$"><code>import psutil</code></pre>
                                <pre data-prefix=">" className="text-warning"><code>print(psutil.sensors_battery())</code></pre>
                            </div>
                        </div>

                        <p class="sm:text-lg">After executing the above code I got
                            <br />
                            <br />
                            <blockquote class="sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">sbattery(percent=77, secsleft=49380, power_plugged=False)
                                as output (output can be different for your case).</blockquote>


                            <span className='text-red-600 font-bold text-md'>Thanks for reading 😀 Happy Coding 🎉.</span></p>
                    </div>
                </div>
            </article>


        </div>
    );
};

export default Home;