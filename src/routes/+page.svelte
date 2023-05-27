<script lang="ts">
  import { onMount } from "svelte";
  import dayjs from "dayjs";

  type link = {
    name: String;
    link: string;
  }

  interface category {
    title: String;
    children: Array<link>;
    color: String;
  }

  let searchTerm = "";
  let day = "";
  let categories: Array<category> = [
    {
      title: "socials",
      color: "green",
      children: [
        {
          name: "twitter",
          link: "https://twitter.com"
        },
        {
          name: "reddit",
          link: "reddit.com"
        }
      ]
    },
    {
      title: "tools",
      color: "teal",
      children: [
        {
          name: "github",
          link: "github.com"
        }
      ]
    },
    {
      title: "leisure",
      color: "blue",
      children: [
        {
          name: "youtube",
          link: "youtube.com"
        },
        {
          name: "twitch",
          link: "twitch.tv"
        }
      ]
    },
    {
      title: "dev",
      color: "purple",
      children: [
        {
          name: "repo",
          link: "repo.new"
        },
        {
          name: "typewolf",
          link: "typewolf.com"
        }
      ]
    },
    {
      title: "other",
      color: "rose",
      children: [
        {
          name: "monkeytype",
          link: "monkeytype.com"
        },
        {
          name: "front end masters",
          link: "frontendmasters.com"
        }
      ]
    },
  ];

  onMount(() => {
    day = dayjs().format("dddd");
  });

  const search = (e: any) => {
    const searchData = new FormData(e.target);
    window.location.href = `https://www.google.com/search?q=${searchData.get("query")}`
  };

</script>

    <svg
      id="patternId"
      width="500vw"
      height="500vh"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 z-[-1000] animate-wavy"
    >
      <defs>
        <pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="70"
          height="8"
          patternTransform="scale(2) rotate(160)"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(0, 0%, 100%, 0)"
          />
          <path
            d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002"
            stroke-width="0.5"
            stroke="hsla(213, 14%, 34%, 1)"
            fill="none"
          />
        </pattern>
      </defs>
      <rect
        width="800%"
        height="800%"
        transform="translate(-26,-14)"
        fill="url(#a)"
      />
    </svg>
    <!-- <h2 class="text-6xl text-blue-100 tracking-tight font-bold">flow ~</h2> -->
    <div class="w-2/3 h-1/2 flex justify-start items-center gap-3 lowercase">
      <div class="w-[30%] h-full relative shadow-2xl">
        <img
          src="https://i.pinimg.com/564x/96/57/49/965749ad14c097b0a0894791eed96dd0.jpg"
          alt="waves"
          class="object-fill max-h-full w-full z-[1000] select-none"
        />
      </div>

      <div
        class="w-[70%] h-full flex flex-col gap-3 justify-center items-center z-100"
      >
        <div
          class="w-full h-[20%] flex gap-3 bg-blue-200/10 relative p-3 backdrop-blur-[2px]"
        >
          <div class="w-full" >
        <form on:submit|preventDefault={search}>
          <input
            type="text"
            name="query"
            placeholder="search google"
            class="min-w-full h-full leading-none align-baseline bg-transparent p-0 text-blue-100 text-base outline-none border-b border-blue-200/50 placeholder:text-blue-100/80"
            value={searchTerm}
            autofocus
            />
        </form>
          </div>
          <div class="flex justify-end h-full w-0">
            <h2
              class="text-blue-200/60 select-none absolute -top-[5.2rem] right-0 font-cursive text-[6.5rem] m-0 leading-tight">{day}</h2>
          </div>
        </div>
        <div
          class="w-full h-[80%] bg-blue-200/10 flex gap-3 p-3 backdrop-blur-[2px]"
        >
          {#each categories as cat}
            <div class="w-full h-full flex flex-col gap-2">
              <p
                class={"link-head text-base font-semibold leading-none text-" + cat.color + "-300"}
              >{cat.title}</p>
              <div class="flex flex-col gap-1">
                {#each cat.children as child}
                  <a class={"text-sm hover:translate-x-[0.2rem] ease-in-out duration-100 text-" + cat.color + "-100"} href={child.link}>
                    › {child.name}
                  </a>
                {/each}
              </div>
            </div>
      {/each}
        </div>
      </div>
    </div>
