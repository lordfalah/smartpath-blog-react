const allEvents = async () => {
  try {
    const req = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/event`);
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Response(error?.message, { status: 500 });
  }
};

const detailEvent = async (params) => {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_API_URL_LOCAL}/event/${params?.slug}`
    );
    const res = await req.json();

    return res;
  } catch (error) {
    throw new Response(error?.message, { status: 500 });
  }
};

const eventSearch = async (request) => {
  try {
    const query = new URL(request.url).searchParams.get("query") || "";

    const req = await fetch(
      `${import.meta.env.VITE_API_URL_LOCAL}/event?search=${query}&page=1`
    );
    const res = await req.json();

    return res;
  } catch (error) {
    throw new Response(error?.message, { status: 500 });
  }
};

const eventCategorys = async () => {
  try {
    const req = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/category`);
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Response(error?.message, { status: 500 });
  }
};

export { allEvents, detailEvent, eventSearch, eventCategorys };
