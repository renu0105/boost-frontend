import { Button } from "@/components/Button";
import { Field, Input, Label, Switch, Textarea } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiCopy } from "react-icons/bi";

export const EditGame = ({ data, setData }) => {
  const [game, setGame] = useState(data || getDefaultGame());
  const [loading, setLoading] = useState(false);

  function getDefaultGame() {
    return {
      name: "",
      description: "",
      price: null,
      image: "",
      category_id: 0,
      product_attribute_category_id: 0,
      order_id: 0,
      cart_id: 0,
      is_priority: false,
      tax: null,
      platform: "",
      is_active: true,
      most_popular: false,
      tag_line: "",
      bg_image: "",
      primary_color: "",
      secondary_color: "",
      features: [],
    };
  }

  useEffect(() => {
    setData(game);
  }, [game, setData]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col justify-between items-start gap-4 text-base">
        <div className="flex flex-wrap gap-4 w-full">
          <Field className="flex flex-col gap-1 flex-1">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Game name"
              value={game?.name}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3 text-xl",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, name: e.target.value });
              }}
            />
          </Field>

          {/* platform */}
          <Field className="flex flex-col gap-1 flex-1">
            <Label>Platform</Label>
            <Input
              type="text"
              placeholder="Platform"
              value={game?.platform}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3 text-xl",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, platform: e.target.value });
              }}
            />
          </Field>
        </div>

        {/* id */}
        {data?.id && (
          <Button
            onClick={(e) => {
              navigator.clipboard.writeText(data?.id);

              toast.success("Copied to clipboard!");
            }}
            className="flex gap-2 items-center rounded-lg"
          >
            ID : {data.id}
            <BiCopy className="h-5 w-5 ml-2" />
          </Button>
        )}

        {/* description */}
        <Field className="flex flex-col gap-1 w-full">
          <Label>Description</Label>
          <Textarea
            placeholder="Game description"
            value={game?.description}
            className={clsx(
              "rounded-lg border-none bg-white/10 py-1.5 px-3",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
            onChange={(e) => {
              setGame({ ...game, description: e.target.value });
            }}
          />
        </Field>

        <div className="flex flex-wrap gap-4 w-full">
          {/* Price */}
          <Field className="flex flex-col gap-1 flex-1">
            <Label>Price</Label>
            <Input
              type="number"
              placeholder="$200"
              value={game?.price}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, price: e.target.value });
              }}
            />
          </Field>

          {/* tax */}
          <Field className="flex flex-col gap-1 flex-1">
            <Label>Tax</Label>
            <Input
              type="number"
              placeholder="0.2"
              value={game?.tax}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, tax: e.target.value });
              }}
            />
          </Field>
        </div>

        {/* image */}
        <Field className="flex flex-col gap-1 w-full">
          <Label>Image</Label>
          <Input
            type="text"
            placeholder="Image URL"
            value={game?.image}
            className={clsx(
              "rounded-lg border-none bg-white/10 py-1.5 px-3",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            onChange={(e) => {
              setGame({ ...game, image: e.target.value });
            }}
          />
        </Field>

        {/* bg_image */}
        <Field className="flex flex-col gap-1 w-full">
          <Label>Background Image</Label>
          <Input
            type="text"
            placeholder="Image URL"
            value={game?.bg_image}
            className={clsx(
              "rounded-lg border-none bg-white/10 py-1.5 px-3",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            onChange={(e) => {
              setGame({ ...game, bg_image: e.target.value });
            }}
          />
        </Field>

        {/* Switch box */}
        <div className="flex flex-wrap gap-4 w-full bg-white/10 p-4 rounded-lg">
          {/* is_priority */}
          <div className="flex items-center gap-4 bg-black/20 p-2 rounded-lg flex-1 justify-center">
            <p>Is Priority</p>
            <Switch
              checked={game?.is_priority}
              onChange={(checked) => {
                setGame({ ...game, is_priority: checked });
              }}
              className="group relative flex h-7 min-w-14 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-Gold/80"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
          </div>

          {/* is_active */}
          <div className="flex items-center gap-4 bg-black/20 p-2 rounded-lg flex-1 justify-center">
            <p>Is Active</p>
            <Switch
              checked={game?.is_active}
              onChange={(checked) => {
                setGame({ ...game, is_active: checked });
              }}
              className="group relative flex h-7 min-w-14 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-Gold/80"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
          </div>

          {/* most_popular */}
          <div className="flex items-center gap-4 bg-black/20 p-2 rounded-lg flex-1 justify-center">
            <p>Most Popular</p>
            <Switch
              checked={game?.most_popular}
              onChange={(checked) => {
                setGame({ ...game, most_popular: checked });
              }}
              className="group relative flex h-7 min-w-14 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-Gold/80"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
          </div>
        </div>

        {/* tag_line */}
        <Field className="flex flex-col gap-1 w-full">
          <Label>Tag Line</Label>
          <Input
            type="text"
            placeholder="Game tagline"
            value={game?.tag_line}
            className={clsx(
              "rounded-lg border-none bg-white/10 py-1.5 px-3",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            onChange={(e) => {
              setGame({ ...game, tag_line: e.target.value });
            }}
          />
        </Field>

        <div className="flex flex-wrap gap-4 w-full">
          {/* primary color */}
          <Field className="flex flex-col gap-1 w-full">
            <Label>Primary color</Label>
            <Input
              type="text"
              placeholder="#FFFFFF"
              value={game?.primary_color}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, tag_line: e.target.value });
              }}
            />
          </Field>

          {/* secondary color */}
          <Field className="flex flex-col gap-1 w-full">
            <Label>Secondary color</Label>
            <Input
              type="text"
              placeholder="#000000"
              value={game?.secondary_color}
              className={clsx(
                "rounded-lg border-none bg-white/10 py-1.5 px-3",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              onChange={(e) => {
                setGame({ ...game, secondary_color: e.target.value });
              }}
            />
          </Field>
        </div>
      </div>
    </div>
  );
};
