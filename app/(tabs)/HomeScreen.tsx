import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen(){
  return (
	<View style={styles.container}>
		<Text style={styles.title}>Welcome to my ex00!</Text>
		<Text style={styles.subtitle}>This is just a simple page. Did you really expect something else?</Text>
		<TouchableOpacity style={styles.button1} onPress={() => console.log('Button pressed!')}>
				<Text style={styles.buttonText}>Botão 1</Text>
		</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	container: 
	{
		flex: 1, // Faz a tela ocupar toda a altura da tela
		backgroundColor: '#FFFFFF', // Fundo branco
		justifyContent: 'center', // Centraliza o conteúdo verticalmente
		alignItems: 'center', // Centraliza o conteúdo horizontalmente
		padding: 20, // Adiciona um pouco de espaçamento nas bordas
	},
	title: 
	{
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		backgroundColor: '#f0f0f0',
		padding: 15,
		borderRadius: 15
	},
	subtitle: 
	{
		fontSize: 16,
		fontFamily: 'monospace', // Fonte do texto
		color: '#555', // Cor mais suave para o subtítulo
		textAlign: 'center', // Centraliza o texto
	},
	button1: 
	{
		backgroundColor: '#b1f0e8', // Cor vermelha
		padding: 10, // Espaçamento interno
		marginTop: 20, // Espaçamento entre o subtítulo e o botão
		borderRadius: 5, // Borda arredondada
		
	},
});

// export default HomeScreen;
