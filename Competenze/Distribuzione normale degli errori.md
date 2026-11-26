---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["normal distribution of errors", "curva di Gauss", "distribuzione di Gauss", "gaussiana", "FWHM", "densità di frequenza"]
tags: [competenza, area/fisica]
---

# Distribuzione normale degli errori

> Se una misura è soggetta a molte cause di errore casuali e a errori sistematici trascurabili, l'istogramma delle misure tende a una curva a campana simmetrica centrata sul valor medio: la distribuzione normale.

## Definizione / enunciato
Dividendo le misure in intervalli di ampiezza $\Delta_k$, la frazione $P_k$ di misure nell'intervallo $k$ dà la densità di frequenza $p_k=P_k/\Delta_k$ (l'area del rettangolo è $P_k$). Per $N\to\infty$ l'istogramma tende a una funzione continua $p(x)$, la distribuzione limite: per il **teorema del limite centrale** è la gaussiana, con centro $x_0$ e larghezza $\sigma$ (più $\sigma$ è piccola, più l'esperimento è preciso).

## Formule chiave
$$\mathrm{FWHM}=2\sqrt{2\ln2}\,\sigma\approx2.35\,\sigma$$
Probabilità che la media si discosti dal valore vero per meno di $s_{\langle x\rangle}$, $2s_{\langle x\rangle}$, $3s_{\langle x\rangle}$: $68.3\%$, $95.4\%$, $99.7\%$.

## Intuizione
La somma di tanti piccoli disturbi indipendenti, ora per eccesso ora per difetto, produce una distribuzione simmetrica; per questo la deviazione standard è la misura naturale dell'incertezza.

## Come si usa
Si confrontano risultati e incertezze in termini di numero di $\sigma$; a volte la larghezza si dà come FWHM invece che come $\sigma$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 27/04/2022 "Distribuzioni di misure ripetute - Teorema del limite centrale". Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/Statistica_TeoremaLimiteCentrale.pdf` (pp. 3-17); l'espressione della densità gaussiana è solo in figura (da verificare sul PDF).

## Prerequisiti
- [[Media e deviazione standard delle misure]]: parametri della distribuzione limite

## Porta a
- Nessuno.

## Collegati
- [[Errori di misura]]: nasce dagli errori accidentali, non dai sistematici
- [[Teorema del limite centrale]]: giustifica la distribuzione limite gaussiana delle misure
