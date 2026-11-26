---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electromagnetic waves", "onde e.m.", "velocità della luce", "c = 1/√(ε0μ0)", "onda piana", "plane wave", "E = cB", "onde trasversali", "notazione complessa delle onde", "spettro elettromagnetico"]
tags: [competenza, area/fisica]
---

# Onde elettromagnetiche

> Dalle equazioni di Maxwell nel vuoto $\vec E$ e $\vec B$ soddisfano l'equazione delle onde: il campo si propaga con velocità $c=1/\sqrt{\varepsilon_0\mu_0}$ come onda trasversale con $E=cB$.

## Definizione / enunciato
Nel vuoto senza cariche né correnti, applicando $\nabla\times$ alla legge di Faraday-Henry e usando $\nabla\times(\nabla\times)=\nabla(\nabla\cdot)-\nabla^2$, $\nabla\cdot\vec E=0$ e la legge di Ampère-Maxwell, si ottiene l'equazione delle onde (lo stesso per $\vec B$). In 29&30 lo stesso risultato si ricava applicando le due leggi a rettangoli infinitesimi nei piani XY e XZ. Per un'**onda piana** (campi indipendenti da $y$ e $z$) le componenti lungo la propagazione sono costanti: l'onda è **trasversale**, $\vec E\perp\vec B$, in fase, e la direzione di propagazione è $\vec E\times\vec B$.

## Formule chiave
$$\nabla^2\vec E-\mu_0\varepsilon_0\frac{\partial^2\vec E}{\partial t^2}=0,\qquad \varepsilon_0\mu_0=\frac{1}{c^2},\qquad c=\frac{1}{\sqrt{\varepsilon_0\mu_0}}\approx3\cdot10^8\ \text{m/s}$$
$$\vec E(x,t)=\vec E_0\sin[k(x-ct)]=\mathrm{Im}\{\vec E_0e^{i[k(x-ct)]}\},\qquad kc=\omega=2\pi\nu=\frac{2\pi}{T},\qquad E(P,t)=cB(P,t)$$
$$\frac{E_y}{B_z}=\frac\omega k=v,\qquad \vec E=\vec B\times\vec v,\qquad v=\frac{1}{\sqrt{\varepsilon\mu}}=\frac{c}{\sqrt{\varepsilon_r\mu_r}},\qquad \nu=\frac{\omega}{2\pi}\Rightarrow\lambda=\frac c\nu$$

## Intuizione
Un $\vec B$ variabile genera $\vec E$ (Faraday-Henry) e un $\vec E$ variabile genera $\vec B$ (corrente di spostamento): i due campi si sostengono a vicenda e viaggiano senza mezzo materiale. Le sorgenti sono cariche accelerate. Le onde piane armoniche sono soluzioni del tutto generali grazie a serie e integrale di Fourier.

## Come si usa
Data $\vec E$ di un'onda piana si ricava $\vec B$ (modulo $E/c$, direzione tale che $\vec E\times\vec B$ indichi la propagazione) e $\lambda=c/\nu$. Lo spettro va dalle radiofrequenze ai raggi gamma; nella materia $v=c/n$.

## Nei corsi
- **Fisica 2** (triennale): derivazione con i rettangoli infinitesimi, onde piane reali e in notazione complessa, spettro; dimostrazione con il rotore e proprietà dell'onda piana nel testo 30bis. Fonti: `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (pp. 24-29, 40-53); `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (pp. 2-6).

## Prerequisiti
- [[Equazioni di Maxwell]]: rotore del rotore delle equazioni nel vuoto
- [[Equazione delle onde]]: E e B soddisfano l'equazione delle onde

## Porta a
- [[Polarizzazione delle onde elettromagnetiche]]: orientazione di E nel piano trasverso
- [[Vettore di Poynting]]: E = cB e direzione E × B
- [[Esperimento di Hertz]]: sovrapposizione di onda incidente e riflessa
- [[Dipolo oscillante]]: a grande distanza il campo è un'onda con E = cB
- [[Indice di rifrazione]]: velocità di propagazione in un mezzo
- [[Metodo dei fasori]]: onde armoniche in notazione complessa

## Collegati
- [[Quantizzazione dell'energia e fotoni]]: natura ondulatoria della radiazione, poi quantizzata in fotoni
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: onde scritte come parte immaginaria di E0 e^{i(kx-ωt)}
