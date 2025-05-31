import Image from "next/image";
import React, { useEffect } from "react";
import { useGroomingRoom } from "@/contexts/GroomingRoomContext";
import { useSocket } from "@/contexts/SocketContext";
import { GroomingInfo } from "@/shared/interfaces";
import { useRouter } from "next/navigation";

type Props = {
  roomId: string;
  closeModal: () => void;
};

export const LeaveRoom = ({ roomId, closeModal }: Props) => {
  const socket = useSocket();
  const router = useRouter();
  const { userInfo, setGroomingInfo } = useGroomingRoom();

  const handleRemoveUser = () => {
    localStorage.removeItem("lobby");
    socket.emit(
      "removeUser",
      roomId,
      userInfo.lobby.userID,
      userInfo.lobby.credentials
    );
  };

  useEffect(() => {
    const removeUser = (data: GroomingInfo, userId: string) => {
      if (userInfo.lobby.userID === userId) {
        router.push("/");
        setGroomingInfo({});
      } else {
        setGroomingInfo(data);
      }
    };

    socket.on("removeUser", removeUser);

    return () => {
      socket.off("removeUser", removeUser);
    };
  }, [router, socket, setGroomingInfo, userInfo]);

  return (
    <div className="leave-room">
      <div className="leave-room__error-sign">
        <Image
          src="/leave-room.svg"
          width={12}
          height={12}
          alt="Close Leave Room Modal"
        />
      </div>
      <h4>Sair da sala</h4>
      <h5>
        Tem certeza de que deseja sair da sala?
        Se você sair, poderá entrar novamente usando o mesmo link enquanto a sessão estiver ativa.
      </h5>
      <div className="leave-room__dialog-buttons">
        <button onClick={closeModal}>Cancel</button>
        <button onClick={handleRemoveUser}>Sair</button>
      </div>
    </div>
  );
};
