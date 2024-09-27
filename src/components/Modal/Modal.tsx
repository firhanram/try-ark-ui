import {
  DialogBackdrop,
  DialogContent,
  DialogPositioner,
  DialogRoot,
  DialogRootProps,
  Portal,
} from "@ark-ui/react";

const Modal = (props: DialogRootProps) => {
  return (
    <DialogRoot lazyMount unmountOnExit modal={false} {...props}>
      <Portal>
        <DialogBackdrop className="fixed inset-0 z-10 bg-black/45" />
        <DialogPositioner className="overflow-auto fixed inset-0 z-10">
          <DialogContent className="max-w-[calc(100vw-16px)] bg-white rounded-lg shadow-modal mx-auto outline-none w-[460px] p-4 relative mb-7 mt-[100px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptates fugiat, laborum quasi aliquam quis impedit delectus,
            quisquam tempora quos error quae quod odio molestiae maiores minus
            veritatis qui asperiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque voluptates fugiat, laborum quasi aliquam
            quis impedit delectus, quisquam tempora quos error quae quod odio
            molestiae maiores minus veritatis qui asperiores. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Atque voluptates fugiat,
            laborum quasi aliquam quis impedit delectus, quisquam tempora quos
            error quae quod odio molestiae maiores minus veritatis qui
            asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque voluptates fugiat, laborum quasi aliquam quis impedit
            delectus, quisquam tempora quos error quae quod odio molestiae
            maiores minus veritatis qui asperiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque voluptates fugiat, laborum quasi
            aliquam quis impedit delectus, quisquam tempora quos error quae quod
            odio molestiae maiores minus veritatis qui asperiores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Atque voluptates
            fugiat, laborum quasi aliquam quis impedit delectus, quisquam
            tempora quos error quae quod odio molestiae maiores minus veritatis
            qui asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque voluptates fugiat, laborum quasi aliquam quis impedit
            delectus, quisquam tempora quos error quae quod odio molestiae
            maiores minus veritatis qui asperiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque voluptates fugiat, laborum quasi
            aliquam quis impedit delectus, quisquam tempora quos error quae quod
            odio molestiae maiores minus veritatis qui asperiores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Atque voluptates
            fugiat, laborum quasi aliquam quis impedit delectus, quisquam
            tempora quos error quae quod odio molestiae maiores minus veritatis
            qui asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque voluptates fugiat, laborum quasi aliquam quis impedit
            delectus, quisquam tempora quos error quae quod odio molestiae
            maiores minus veritatis qui asperiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque voluptates fugiat, laborum quasi
            aliquam quis impedit delectus, quisquam tempora quos error quae quod
            odio molestiae maiores minus veritatis qui asperiores.
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};

export default Modal;
