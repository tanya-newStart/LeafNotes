import { Modal, Box, Typography } from "@mui/material";
import Button from "./Button";

const ConformationModal = ({
    isOpen,
    onClose,
    onConfirm,
    message,
    confirmText = "Yes",
    cancelText = "No",
}) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 24,
                }}
            >
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    {message}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <Button variant="primary" onClick={onConfirm}>
                        {confirmText}
                    </Button>
                    <Button variant="secondary" onClick={onClose} sx={{ marginLeft: 2 }}>
                        {cancelText}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ConformationModal;
