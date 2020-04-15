import { ICountry } from "../../configs/country";

export interface UpdateModalProps {
  selectedCountry: ICountry | null;
  visible: boolean;
  modalDismiss: () => void;
}

export type ConnectedUpdateModalProps<PropsFromRedux> = PropsFromRedux &
  UpdateModalProps;
