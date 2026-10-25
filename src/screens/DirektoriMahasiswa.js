import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// Dataset statis di luar komponen
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Wingky', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Alex', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Andra', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Zulvi', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Puja', prodi: 'Sistem Informasi' },
];

export default function DirektoriMahasiswa() {
  const [keyword, setKeyword] = useState('');

  // Filter real-time, tidak sensitif huruf besar/kecil
  const dataFiltered = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: { fontSize: 15, fontWeight: '600' },
  prodi: { color: '#666666', marginTop: 2 },
  empty: { textAlign: 'center', marginTop: 20, color: '#999999' },
});