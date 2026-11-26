---
tipo: competenza
area: fisica
corsi: [Fisica 1, Chimica]
livello: [triennale]
aliases: ["entropy", "funzione di stato entropia", "variazione di entropia", "diagramma TS", "T-S diagram", "entropia di un gas ideale", "entropia molare standard", "entropia di reazione"]
tags: [competenza, area/fisica]
---

# Entropia

> Funzione di stato la cui variazione tra due stati è l'integrale di $\delta Q/T$ lungo una qualunque trasformazione reversibile che li collega.

## Definizione / enunciato
Due trasformazioni reversibili 1 e 2 da A a B formano, percorrendo la 2 al contrario, un ciclo reversibile; per il teorema di Clausius $\int_A^B(\delta Q/T)_1=\int_A^B(\delta Q/T)_2$. Quindi
$$\Delta S=S(B)-S(A)=\int_A^B\left(\frac{\delta Q}{T}\right)_{rev},\qquad [S]=\mathrm{J/K}.$$
$dS$ è un differenziale esatto; l'entropia è additiva ed estensiva. Per una trasformazione irreversibile si calcola $\Delta S$ su una reversibile tra gli stessi stati.
**Diagrammi TS:** l'area sotto una trasformazione reversibile è il calore scambiato; isoterme orizzontali, adiabatiche reversibili verticali, Carnot è un rettangolo.

## Formule chiave
$$\Delta S_{gas}=nc_V\ln\frac{T_B}{T_A}+nR\ln\frac{V_B}{V_A}=nc_p\ln\frac{T_B}{T_A}-nR\ln\frac{p_B}{p_A}=nc_V\ln\frac{p_B}{p_A}+nc_p\ln\frac{V_B}{V_A}$$
$$\Delta S_{corpo}=mc\ln\frac{T_2}{T_1},\qquad \Delta S_{sorgente}=\frac{Q}{T}$$

## Intuizione
Le adiabatiche reversibili sono isoentropiche; nel diagramma TS il rendimento di Carnot è il rapporto tra due aree.

## Come si usa
Corpo di massa $m$ a $T_1$ messo a contatto con una sorgente a $T_2$ (`Termodinamica_Lezione5.pdf` p. 9): si immagina una serie infinita di sorgenti, $\Delta S_{sist}=mc\ln(T_2/T_1)$, $\Delta S_{amb}=mc(T_1-T_2)/T_2$, e la somma è positiva. Esercizio 2 (pp. 25-31): per le tre fasi del riscaldamento con fusione si trovano 8.751 kJ/K, 1.251 kJ/K e 291.65 J/K.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 23 e 25/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione4.pdf` (pp. 54-65); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione5.pdf` (pp. 2-31).
- **Chimica** (triennale): lezione 17, l'entropia come misura della dispersione della distribuzione dell'energia; aumenta da solido a liquido a gas. Entropie molari standard $S^\circ$ tabulate a 25 °C in cal K$^{-1}$ mol$^{-1}$ (non nulle per gli elementi) ed entropia di reazione $\Delta S^\circ_r=\sum n_iS^\circ(\text{prodotti})-\sum n_jS^\circ(\text{reagenti})$. Fonte: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 17 - T.chimica T.dinamica.pdf` (lezione 17, pp. 39-42).

## Prerequisiti
- [[Teorema di Clausius]]: ∮δQ/T = 0 sui cicli reversibili

## Porta a
- [[Principio di aumento dell'entropia]]: variazione di S per sistemi isolati
- [[Energia libera di Gibbs]]: termine TΔS
- [[Distribuzione di Fermi-Dirac]]: S = kB ln W, minimo dell'energia libera

## Collegati
- [[Calorimetria]]: ΔS negli scambi di calore e nei cambiamenti di fase
- [[Trasformazioni notevoli dei gas ideali]]: ΔS per isoterma, isocora, isobara
