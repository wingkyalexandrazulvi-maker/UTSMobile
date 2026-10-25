import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [detail, setDetail] = useState({ title: '', status: '' });

  const bukaDetail = (title, status) => {
    setDetail({ title, status });
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daftar Tugas</Text>

      <InfoCard
        title="laporan prak lab"
        status="selesai"
        onPress={() => bukaDetail('laporan prak lab', 'selesai')}
      />
      <InfoCard
        title="laporan tugas"
        status="proses"
        onPress={() => bukaDetail('laporan tugas', 'proses')}
      />

      <DirektoriMahasiswa />

      {/* Pop-up di tengah layar */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Detail</Text>
            <Text style={styles.modalText}>Judul: {detail.title}</Text>
            <Text style={styles.modalText}>Status: {detail.status}</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F8',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  modalText: { fontSize: 15, marginBottom: 6 },
  modalButton: {
    backgroundColor: '#1F4E9C',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButtonText: { color: '#FFFFFF', fontWeight: '600' },
});