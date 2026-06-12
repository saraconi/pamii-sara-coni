import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Imports dos componentes locais do Gluestack v3
import { GluestackUIProvider } from '../../components/ui/gluestack-ui-provider';
import { Card } from '../../components/ui/card';
import { Avatar, AvatarImage, AvatarFallbackText } from '../../components/ui/avatar';
import { Button, ButtonText } from '../../components/ui/button';
import { Heading } from '../../components/ui/heading';

export default function App() {
  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        
       
        <Card variant="elevated" className="p-5 rounded-lg max-w-[360px] m-3">
          
          <View style={styles.headerRow}>
           
            <Avatar size="md" className="mr-3">
              <AvatarFallbackText>Diana Tech</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                }}
                alt="Foto de Perfil"
              />
            </Avatar>
            
            <View>
              <Heading size="md">Diana Tech</Heading>
              <Text style={styles.subtitle}>Desenvolvedora Full-Stack</Text>
            </View>
          </View>

          <Text style={styles.bodyText}>
            Criando interfaces modernas e performáticas no ecossistema Mobile com Expo e Gluestack-UI. Pronto para o Code Review!
          </Text>

          <Button
            size="md"
            variant="solid"
            action="primary"
            onPress={() => alert('Abrindo Repositório...')}
          >
            <ButtonText>Ver Repositório</ButtonText>
          </Button>
          
        </Card>

      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#71717a',
  },
  bodyText: {
    fontSize: 14,
    color: '#3f3f46',
    marginTop: 16,
    marginBottom: 16,
    lineHeight: 20,
  },
});