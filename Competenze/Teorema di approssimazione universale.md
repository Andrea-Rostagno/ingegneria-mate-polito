---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [universal approximation theorem, teorema di Cybenko, teorema di Hornik, approssimatori universali, universal approximators]
tags: [competenza, area/data-ml]
---

# Teorema di approssimazione universale

> Risultato che garantisce che una rete feed-forward con un solo strato nascosto e un numero finito di neuroni può approssimare a piacere qualunque funzione continua su un compatto.

## Definizione / enunciato
Enunciato riportato nelle slide (`DSML-Deep-Learning-Intro.pdf` p. 10): "per ogni funzione continua definita su un sottoinsieme compatto di $\mathbb R^n$ e per ogni $\varepsilon>0$ esiste una rete neurale feed-forward con **un solo strato nascosto** e un numero finito di neuroni che approssima $g$ entro un'accuratezza arbitraria". Riferimenti citati: Cybenko (1989), "Approximation by superpositions of a sigmoidal function"; Hornik, Stinchcombe, White (1989), "Multilayer feedforward networks are universal approximators".

## Formule chiave
In forma di enunciato (la slide non scrive la norma): $\forall g$ continua su $K\subset\mathbb R^n$ compatto, $\forall\varepsilon>0$, $\exists$ rete $f$ a uno strato nascosto con $\sup_{x\in K}|f(x)-g(x)|<\varepsilon$ (forma della norma da verificare sul PDF).

## Intuizione
Il teorema serve a giustificare le non linearità: senza attivazioni non lineari una pila di strati collassa in una trasformazione lineare $y=\theta_2^T\theta_1^Tx$ (p. 9), con una non linearità invece la classe di funzioni diventa densa. È però un risultato di **esistenza**: non dice quanti neuroni servono né quali pesi usare; in pratica si usano reti **più profonde e più strette**.

## Come si usa
Domanda tipica: perché servono le funzioni di attivazione e cosa garantisce (e non garantisce) il teorema. Risposta: con non linearità un MLP è un approssimatore universale; l'addestramento (discesa del gradiente) resta il problema pratico.

## Nei corsi
- **Data science lab** (magistrale): slide "Multi-layer perceptron models" dell'introduzione al deep learning. Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 9-10).

## Prerequisiti
- [[Rete neurale artificiale]]: MLP con strati nascosti
- [[Funzioni di attivazione]]: la non linearità impedisce il collasso a un modello lineare

## Collegati
- [[Teorema di approssimazione di Kolmogorov]]: rappresentazione esatta di funzioni di più variabili con somme e composizioni, analogo "esatto" del teorema
