---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["probability amplitude", "interpretazione di Born", "Born rule", "significato della funzione d'onda", "normalizzazione", "esperimento della doppia fenditura con elettroni", "sovrapposizione degli stati"]
tags: [competenza, area/fisica]
---

# Ampiezza di probabilità

> La funzione d'onda $\Psi(\vec r,t)$ è un'ampiezza complessa il cui modulo quadro dà la probabilità di trovare la particella in un volumetto: è l'interpretazione di Born (Copenaghen).

## Definizione / enunciato
$|\Psi(\vec r,t)|^2d\vec r$ è la frazione di volte in cui sperimentalmente si trova la particella nel volume $d\vec r$ intorno a $\vec r$, cioè la probabilità di trovarla lì. Proprietà di $\Psi$:
- è in generale a valori complessi;
- se il sistema è contenuto nel volume $\Omega$, $\Psi=0$ fuori da $\Omega$, continua e finita dentro, a quadrato sommabile: $\Psi\in L^2(\Omega)$;
- è normalizzata all'unità;
- vale il principio di sovrapposizione: le $\Psi$ formano uno spazio vettoriale con prodotto scalare complesso.

## Formule chiave
$$\int_{vol}|\Psi(\vec r,t)|^2d\vec r=1$$
$$\Psi=a\Psi_1+b\Psi_2,\quad a,b\in C,\qquad \langle\Psi_1|\Psi_2\rangle=\int_\Omega\Psi_1^*\Psi_2\,d\vec r\in C$$
Doppia fenditura con elettroni:
$$\frac{n_e(Det)}{N_{0,e}}\propto|\Psi(Det)|^2d\vec r=|\Psi_1+\Psi_2|^2d\vec r$$

## Intuizione
Con le pallottole le probabilità si sommano, $P_{12}(x)=P_1(x)+P_2(x)$. Con onde e.m. e con elettroni si sommano invece le ampiezze, e la probabilità è il modulo quadro della somma: nasce la figura di interferenza. Il conteggio dei fotoni (o degli elettroni) sul rivelatore è la versione corpuscolare dell'intensità $|E_1+E_2|^2$.

## Come si usa
Si confrontano tre esperimenti alle due fenditure (`52. LEZIONE.pdf` pp. 3-9): pallottole (probabilità additive), onde di Young ($I_{12}\propto|E_1+E_2|^2$, rapporto fotoni arrivati/emessi), elettroni (stessa algebra delle onde con $\Psi$ al posto di $E$). Da $\Psi$ si devono poter estrarre tutte le informazioni fisiche del sistema.

## Nei corsi
- **Fisica 2** (triennale): lezione 52 "Fondamenti della teoria quantistica" (Born 1927), riepilogata all'inizio delle lezioni 55-56; notazione $\Psi(\vec r,t)$, $L^2(\Omega)$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/52. LEZIONE.pdf` (pp. 3-17); `triennale/ANNO 2/fisica 2/lezioni/55&56. LEZIONE.pdf` (pp. 1-5).
- **Quantum physics** (triennale): $\rho=|\psi|^2$, $dP=\rho\,d^3r$, $P(V)=1$ (§4.2 della dispensa di V. Penna, suggerita dalla diffrazione di elettroni: Davisson-Germer, Thomson); per le onde piane non normalizzabili $|\phi_k|^2$ dà solo probabilità relative. Nelle note di M. Re Fiorentin: interpretazione statistica e requisiti di $\psi$. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 31, 35, 64); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (p. 1).

## Prerequisiti
- [[Equazione di Schrödinger]]: Ψ ne è la soluzione
- [[Interferenza da due sorgenti]]: la figura di interferenza degli elettroni

## Porta a
- [[Operatori quantistici]]: il valor medio pesa con |Ψ|²

## Collegati
- [[Corrente di probabilità]]: la densità |Ψ|² obbedisce a un'equazione di continuità (Quantum physics)
