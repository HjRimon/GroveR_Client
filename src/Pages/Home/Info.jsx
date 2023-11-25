const Info = () => {
  return (
    <div>
      <div className="pt-16 bg-gray-50 sm:pt-16">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
              Trusted by peoples
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
              Efficiency in every detail, excellence in every endeavor
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt
                      className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                      id="item-1"
                    >
                      Visitors on Website
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600"
                      aria-describedby="item-1"
                    >
                      4670+
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 -ml-5 text-lg font-medium leading-6 text-gray-500">
                      Ratings
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                      17k+
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 -ml-5 text-lg font-medium leading-6 text-gray-500">
                      Sponsors
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                      100+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
