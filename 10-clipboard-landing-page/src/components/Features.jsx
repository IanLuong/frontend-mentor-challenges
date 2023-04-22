import computerImage from '/images/image-computer.png'

const Features = () => {
  return (
    <section className="m-auto px-8 pb-32">
      <div className="pb-16 pt-4 text-center">
        <h2 className="text-3xl font-bold text-darkGrayishBlue">
          Keep track of your snippets
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[1.01rem] text-grayishBlue">
          Clipboard instantly stores anty imte you copy in the cloud, meaning
          you can access your snippets immediately on all your devices. Our Mac
          and iOS apps will help you organize everything.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
        <div>
          <img src={computerImage} />
        </div>
        <div className="flex flex-col gap-12 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold text-darkGrayishBlue">
              Quick Search
            </h3>
            <p className="mt-3 text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-darkGrayishBlue">
              iCloud Sync
            </h3>
            <p className="mt-3 text-grayishBlue">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-darkGrayishBlue">
              Complete History
            </h3>
            <p className="mt-3 text-grayishBlue">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
