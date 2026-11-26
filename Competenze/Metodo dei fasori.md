---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["phasor method", "vettori rotanti", "rotating vectors", "rappresentazione complessa delle onde", "somma di onde isofrequenziali"]
tags: [competenza, area/fisica]
---

# Metodo dei fasori

> Si rappresenta ogni onda armonica come un vettore del piano complesso che ruota con velocità angolare $\omega$; la somma di onde della stessa frequenza diventa una somma di vettori.

## Definizione / enunciato
L'ampiezza istantanea in un punto di un'onda e.m. $E_1(P,t)=\mathrm{Im}\{E_0e^{i(kr_P\pm\omega t)}\}=\mathrm{Im}\{E_0'e^{i(\pm\omega t)}\}$ si rappresenta sul piano complesso: la parte immaginaria, che ha significato fisico, è la proiezione sull'asse delle ordinate del vettore $E_0'$ (il **fasore**) che ruota con velocità angolare $\omega$ intorno all'origine. Onde con la stessa frequenza ruotano insieme: conta solo la loro differenza di fase, cioè l'angolo tra i fasori. È detto anche metodo dei vettori rotanti.

## Formule chiave
Due onde di uguale ampiezza con differenza di fase $\Phi$ (o $\phi$) in P:
$$E_R=E_1+E_2=E_0e^{i(kr_1-\omega t)}+E_0e^{i(kr_2-\omega t)},\qquad \phi=(kr_2-\omega t)-(kr_1-\omega t)=kr_2-kr_1$$
$$E_R=\left(2E_0\cos\frac\phi2\right)e^{i\left(\frac\phi2+kr_1-\omega t\right)}=E_\theta e^{i\left(\frac\phi2+kr_1-\omega t\right)},\qquad E_\theta=2E_0\cos\frac\phi2$$
Costruzione geometrica (fasori come corde di una circonferenza di raggio $R$):
$$E_0=2R\sin\frac\Phi2,\qquad E_R=2R\sin\Phi\ \Rightarrow\ \frac{E_R}{E_0}=\frac{\sin\Phi}{\sin\frac\Phi2}=2\cos\frac\Phi2$$

## Intuizione
Il fasore risultante è il lato di chiusura della spezzata formata dai singoli fasori messi in coda. Fasori allineati danno il massimo; fasori che formano un poligono chiuso danno campo nullo. L'angolo $\beta=\phi/2$ tra il risultante e il primo fasore è la fase dell'onda somma.

## Come si usa
Si mettono in coda i fasori di tutte le onde nel punto, ciascuno ruotato della sua fase, e si legge il modulo del risultante (con la trigonometria o la costruzione sulla circonferenza). L'intensità media è proporzionale al quadrato di questo modulo. Con due onde si ricava l'interferenza di Young; con $N$ onde il reticolo; con infinite onde infinitesime la diffrazione da una fenditura.

## Nei corsi
- **Fisica 2** (triennale): introdotto come "rappresentazione complessa delle onde e.m. (detta anche metodo dei fasori o dei vettori rotanti)", con figure dei fasori $E_1$, $E_2$, $E_R$; la costruzione con il raggio $R$ è ripresa per tre e $N$ sorgenti. Fonti: `triennale/ANNO 2/fisica 2/lezioni/37&38. LEZIONE.pdf` (pp. 29, 31-32, 35-36); `triennale/ANNO 2/fisica 2/lezioni/39. LEZIONE.pdf` (p. 3).

## Prerequisiti
- [[Onde elettromagnetiche]]: onde armoniche in notazione complessa
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: il fasore è E0 e^{iφ} che ruota con ω

## Porta a
- [[Interferenza da due sorgenti]]: somma dei campi con differenza di fase φ

## Collegati
- Nessuno.
